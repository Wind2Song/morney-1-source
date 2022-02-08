import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

type newRecordItem = {
    tagIDs: number[]
    note: string
    category: '+' | '-'
    amount: string
}
type RecordItem = newRecordItem & {
    createdAt:string //ISO
}
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(()=>{
        JSON.parse(window.localStorage.getItem('records') || '')
    },[])
    const addRecords = (newRecord:newRecordItem) => {
        const record = {...newRecord, createdAt: (new Date()).toISOString()}
        setRecords([...records, record]);
    }

    useUpdate(()=>{
        window.localStorage.setItem('records', JSON.stringify(records))
    },[records]);

    return {records, addRecords}
}

export {useRecords};