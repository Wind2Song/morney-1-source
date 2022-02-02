import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import Layout from "components/Layout";
import { Space } from "components/Space";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

const TopBar = styled.header`
    display:flex;
    justify-content: space-between;
    align-items:center;
    line-height: 20px;
    padding: 14px;
    background: white;
`;
const Label = styled.label`
    display: flex;
    align-items: center;
    margin-top: 8px;
    background: white;
    > span{
      margin-left: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height:44px;
      background: none;
      margin-left: 16px;
      border: none;
    }

`;

type Params = {
    fuck:string, // 这个类型变量名表示路由上/tags/ 后面的名字，这两个名字必须一致
}
const Tag:React.FC = () => {
    const {findTag, deleteTag} = useTags()
    const {fuck:idString} = useParams<Params>();
    // 这个类型变量名表示路由上/tags/ 后面的名字，这两个名字必须一致
    // fuck后面的“冒号”表示对fuck重命名
    // const tag = tags.filter(tag => tag.id === parseInt(fuck))[0]
    const tag = findTag(parseInt(idString));
    const TagContent = () => {
        return(
            <div>
                <div>
                    <Label>
                        <span>标签名</span>
                        <input 
                          type="Text" 
                          placeholder='标签' 
                          defaultValue={tag.name}
                          onChange={(e)=>{
                              tag.name = e.target.value
                          }}
                        />
                    </Label>
                </div>
                <Center>
                    <Space />
                    <Space />
                    <Space />
                    <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </div>
        )
        
    }
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name=""/>
            </TopBar>

            {tag? <TagContent />:<Center>tag不存在</Center>}
        </Layout>
    );
};

export {Tag};