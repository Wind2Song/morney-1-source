import { useRecords } from 'hooks/useRecords';
import { useState } from 'react';
import styled from 'styled-components';
import { useTags } from 'useTags';
import Layout from '../components/Layout';
import { CategorySection } from './Money/CategorySection';
import day from 'dayjs';

const CategoryWrapper = styled.div`
background: white;
`;
function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={(category)=>setCategory(category)}/>
      </CategoryWrapper>

      <div>
        {records.map(r => {
          return <div>
          {r.tagIDs.map(tagID => <span>{getName(tagID)}</span>)}:
          {r.amount}
          <hr></hr>
          {day(r.createdAt).format('YYYY年MM月DD日')}
          </div>
        })}
      </div>
    </Layout>
  )
};

export default Statistics;