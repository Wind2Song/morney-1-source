import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection';
import { NoteSection } from 'views/Money/NoteSection';
import { CategorySection } from 'views/Money/CategorySection';
import { NumberPadSection } from 'views/Money/NumberPadSection'
import { useState } from 'react';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+';
function Money() {
  const [selected, setSelected]=useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: '0'
  })
    return (
      <MyLayout>
          {selected.tags}
          <hr />
          {selected.note}
          <hr />
          {selected.amount}
          <TagsSection value={selected.tags}
                       onChange={(tags)=>setSelected({
                         ...selected,
                         tags:tags
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
                            })}/>
      </MyLayout>
    )
};

export default Money;