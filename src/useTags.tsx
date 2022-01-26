import { createID } from "lib/createID";
import { useState } from "react";

const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>([
        {id:createID(),name:'衣'},
        {id:createID(),name:'食'},
        {id:createID(),name:'住'},
        {id:createID(),name:'行'},
    ]);
    return {tags, setTags}
}

export {useTags};

// {id:number;name:string}
// 更改标签名，得需要这个数组的玩意儿啊