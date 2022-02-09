import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

type newRecordItem = {
    tagIDs: number[]
    note: string
    category: '+' | '-'
    amount: string
}
export type RecordItem = newRecordItem & {
    createdAt:string //ISO格式，要用dayjs库转换成时间戳格式
}
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    },[])
    const addRecords = (newRecord:newRecordItem) => {
        if(newRecord.amount === '0'){
            alert('请输入金额')
            return false
        }
        if(newRecord.tagIDs.length === 0){
            alert('请选择标签')
            return false
        }
        const record = {...newRecord, createdAt: (new Date()).toISOString()}
        setRecords([...records, record]);
        return true;
    }

    useUpdate(()=>{
        window.localStorage.setItem('records', JSON.stringify(records))
    },[records]);

    return {records, addRecords}
}

export {useRecords};