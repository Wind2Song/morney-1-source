import { createID } from "lib/createID";
import { useState } from "react";

const defaultTags = [
    {id:createID(),name:'衣'},
    {id:createID(),name:'食'},
    {id:createID(),name:'住'},
    {id:createID(),name:'行'},
]
const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag=>id === tag.id)[0]
    return {tags, setTags, findTag}
}

export {useTags};

// {id:number;name:string}
// 更改标签名，得需要这个数组的玩意儿啊