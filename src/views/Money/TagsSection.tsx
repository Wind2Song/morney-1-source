import { createID } from "lib/createID";
// import { useState } from "react";
import styled from "styled-components";
import {useTags} from 'useTags'
const Wrapper  = styled.section`
  flex-grow:1; 
  display:flex; flex-direction: column;
  justify-content:flex-end; align-items: flex-start;
  background: #ffffff;  padding: 12px 16px;
  > ol {margin: 0 -12px;
    > li {
      border-radius: 18px;      background: #d9d9d9;
      display: inline-block;      padding: 3px 18px;
      font-size: 14px;      margin: 8px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  > button{
    background: none;    border: none;
    padding: 2px 4px;    border-bottom: 1px solid #333;
    color: #666; margin-top: 8px; 
  }
`;

type Props = {
  value:number[],
  onChange:(selected:number[])=>void
}
const TagsSection: React.FC<Props> = (props)=>{
  const {tags, setTags}=useTags();
  const onAddTag = () =>{
    const tagName = window.prompt('新标签的名字是');
    if((tagName !== null) && (tagName !=='')){
      setTags([...tags, {id:createID(),name:tagName}])
    }
  };
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const selectedTagIDs = props.value;
  const onToggleTag = (tagID:number) =>{
    const index = selectedTagIDs.indexOf(tagID)
    if(index>=0){
      // 如果tag已被选中，就复制所有未被选中的 tag 作为新的(待被选的)selectedTags
      // setSelectedTags(selectedTags.filter(t => t!==tag));
      props.onChange(selectedTagIDs.filter(t => t!==tagID))
    }else{
      // setSelectedTags([...selectedTags, tag]);
      props.onChange([...selectedTagIDs, tagID])
    }
  }
  const getClass = (tagID: number) =>selectedTagIDs.indexOf(tagID) >=0 ? 'selected' : '';
  return(
    <Wrapper>
      <ol>
        {tags.map((tag) => 
          <li key={tag.id} 
            onClick={()=>{onToggleTag(tag.id)}} 
            className={getClass(tag.id)}>{tag.name}
          </li>)
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};