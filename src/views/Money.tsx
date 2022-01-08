import Layout from '../components/Layout';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection';
import { NoteSection } from 'views/Money/NoteSection';
import { CategorySection } from 'views/Money/CategorySection';
import { NumberPadSection } from 'views/Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
function Money() {
    return (
      <MyLayout>
          <TagsSection/>
          <NoteSection/>    
          <CategorySection/>
          <NumberPadSection/>
      </MyLayout>
    )
};

export default Money;