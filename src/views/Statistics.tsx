import { RecordItem, useRecords } from 'hooks/useRecords';
import { useState } from 'react';
import styled from 'styled-components';
import { useTags } from 'useTags';
import Layout from '../components/Layout';
import { CategorySection } from './Money/CategorySection';
import day from 'dayjs';
import { relative } from 'path/posix';

const Item = styled.div`
  display:flex;
  justify-content:space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right:auto;
    margin-left: 16px;
    color: #999;
  }
`;
const CategoryWrapper = styled.div`
background: white;
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash:{[k:string]:RecordItem[]} = {};

  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r)
  })
  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0] === b[0])return 0
    if(a[0] > b[0])return -1
    if(a[0] < b[0])return 1
    return 0
  })

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={(category)=>setCategory(category)}/>
      </CategoryWrapper>
      {array.map(([date, records]) => <div key={date}>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r => {
            return <Item key={r.createdAt}>
              <div className='tags' key={r.tagIDs.toString()}>
                {r.tagIDs.map(tagID => <span key={tagID}>{getName(tagID)}</span>)}
              </div>
                {r.note && <div className='note' key={r.note}>{r.note}</div>}
              <div className="amount" key={r.amount}>
                ￥{r.amount}
              </div>
            </Item>
          })}
        </div>
      </div>)}
    </Layout>
  )
};

export default Statistics;