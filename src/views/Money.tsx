import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection';
import { NoteSection } from 'views/Money/NoteSection';
import { CategorySection } from 'views/Money/CategorySection';
import { NumberPadSection } from 'views/Money/NumberPadSection'
import { useState } from 'react';
import { useRecords } from 'hooks/useRecords';

const CategoryWrapper = styled.div`
background: #c4c4c4;
`;

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

const defaultFormData = {
  tagIDs: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0',
}
type Category = '-' | '+';
function Money() {
  const [selected, setSelected]=useState(defaultFormData)
  const {addRecords} = useRecords();
  const submit = () => {
    if(addRecords(selected)){
      alert('提交成功');
      setSelected(defaultFormData);
    }
  }
    return (
      <MyLayout scrollTop={9999}>
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
        <CategoryWrapper>
          <CategorySection value={selected.category}
                           onChange={(category)=>setSelected({
                             ...selected,
                             category:category
                           })}/>
        </CategoryWrapper>
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