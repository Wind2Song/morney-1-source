import { createID } from "lib/createID";
import { ID } from "lib/ID";
import { useState } from "react";

const defaultTags = [
    {id:createID(),name:'衣'},
    {id:createID(),name:'食'},
    {id:createID(),name:'住'},
    {id:createID(),name:'行'},
]
const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag=>id === tag.id)[0];
    const findIndex = (id:number) => {
        let result = -1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result;
    }
    const updateTag = (id: number, obj:{name:string}) => {
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // const index = findIndex(id)
        // tagsClone.splice(index, 1, {id: id, name: obj.name})
        // setTags(tagsClone)
        setTags(tags.map(tag => tag.id === id ? {id, name:obj.name} : tag))
    }
    const deleteTag = (id: number) => {
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // const index = findIndex(id)
        // tagsClone.splice(index, 1)
        // setTags(tagsClone);
        setTags(tags.filter(tag => tag.id !== id))
    }
    return {tags, setTags, findTag, deleteTag, updateTag} //
}

export {useTags};

// {id:number;name:string}
// 更改标签名，得需要这个数组的玩意儿啊