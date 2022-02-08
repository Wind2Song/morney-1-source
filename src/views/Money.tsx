import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection';
import { NoteSection } from 'views/Money/NoteSection';
import { CategorySection } from 'views/Money/CategorySection';
import { NumberPadSection } from 'views/Money/NumberPadSection'
import { useState } from 'react';
import { useRecords } from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

const defaultFormData = {
  tagIDs: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0'
}
type Category = '-' | '+';
function Money() {
  const [selected, setSelected]=useState(defaultFormData)
  const {records, addRecords} = useRecords();
  const submit = () => {
    addRecords(selected);
    alert('提交成功');
    setSelected(defaultFormData)
  }
    return (
      <MyLayout>
        <TagsSection value={selected.tagIDs}
                     onChange={(tagIDs)=>setSelected({
                       ...selected,
                       tagIDs:tagIDs
                     })}/>
        <NoteSection value={selected.note}
                     onChange={(note)=>setSelected({
                       ...selected,
                       note:note
                     })}/>
        <CategorySection value={selected.category}
                         onChange={(category)=>setSelected({
                           ...selected,
                           category:category
                         })}/>
        <NumberPadSection value={selected.amount}
                          onChange={(amount)=>setSelected({
                            ...selected,
                            amount:amount
                          })}
                          onOK={submit}/>
      </MyLayout>
    )
};

export default Money;