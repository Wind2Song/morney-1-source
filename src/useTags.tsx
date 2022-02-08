import { useUpdate } from "hooks/useUpdate";
import { createID } from "lib/createID";
import { useEffect,  useState } from "react";

const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>([]);
    useEffect(()=>{
        // console.log('11')
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length === 0){
            localTags = [
                {id:createID(),name:'衣'},
                {id:createID(),name:'食'},
                {id:createID(),name:'住'},
                {id:createID(),name:'行'},
            ]
        }
        setTags(localTags)
    },[]) // 加载时执行
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    const addTag = () =>{
        const tagName = window.prompt('新标签的名字是');
        if((tagName !== null) && (tagName !=='')){
          setTags([...tags, {id:createID(),name:tagName}])
        }
      };
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
    const getName = (id:number) => {
        const tag = tags.filter(tag => tag.id === id)[0];
        return tag ? tag.name : ''
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
    return {tags, addTag, setTags, findTag, getName, deleteTag, updateTag} //
}

export {useTags};

// {id:number;name:string}
// 更改标签名，得需要这个数组的玩意儿啊