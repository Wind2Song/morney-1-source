import { Button } from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
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
    const {findTag} = useTags()
    const {fuck} = useParams<Params>();// 这个类型变量名表示路由上/tags/ 后面的名字，这两个名字必须一致
    // const tag = tags.filter(tag => tag.id === parseInt(fuck))[0]
    const tag = findTag(parseInt(fuck))
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon name=""/>
            </TopBar>
            <div>
                <Label>
                    <span>标签名</span>
                    <input 
                      type="Text" 
                      placeholder='标签' 
                    />
                </Label>
            </div>
            <Button>删除标签</Button>
        </Layout>
    );
};

export {Tag};