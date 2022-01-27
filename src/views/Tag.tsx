import Nav from "components/Nav";
import { ID } from "lib/ID";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";

type Params = {
    fuck:string, // 这个类型变量名表示路由上/tags/ 后面的名字，这两个名字必须一致
}
const Tag:React.FC = () => {
    const {findTag} = useTags()
    const {fuck} = useParams<Params>();// 这个类型变量名表示路由上/tags/ 后面的名字，这两个名字必须一致
    // const tag = tags.filter(tag => tag.id === parseInt(fuck))[0]
    const tag = findTag(parseInt(fuck))
    return (
        <div>{tag.name}</div>
    );
};

export {Tag};