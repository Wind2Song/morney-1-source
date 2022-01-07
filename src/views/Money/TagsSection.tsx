import { useState } from "react";
import styled from "styled-components";
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

const TagsSection: React.FC = (props)=>{
  const [tags, setTags] = useState<string[]>(['衣','食','住','行']);
  const onAddTag = () =>{
    const tagName = window.prompt('新标签的名字是');
    if((tagName !== null) && (tagName !=='')){
      setTags([...tags, tagName])
    }
  };
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onToggleTag = (tag:string) =>{
    const index = selectedTags.indexOf(tag)
    if(index>=0){
      // 如果tag已被选中，就复制所有未被选中的 tag 作为新的selectedTags
      setSelectedTags(selectedTags.filter(t => t!==tag))
    }else{
      setSelectedTags([...selectedTags, tag])
    }
  }
  const getClass = (tag: string) =>selectedTags.indexOf(tag) >=0 ? 'selected' : '';
  return(
    <Wrapper>
      <ol>
        {tags.map((tag) => 
          <li key={tag} 
            onClick={()=>{onToggleTag(tag)}} 
            className={getClass(tag)}>{tag}
          </li>)
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};