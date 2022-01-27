import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from 'useTags';
import Layout from '../components/Layout';

const TagList = styled.ol`
  font_size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      display:flex;
      justify-content: space-between;
      align-items: center;  
      padding: 12px 16px 12px 0;
    }
  }
`;
const Button = styled.button`
  background: #767676; color: white;
  font-size: 18px; border: none;
  padding: 8px 12px;
  border-radius: 4px;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Space = styled.div`
  height:16px;
`

function Tags() {
  const {tags, setTags}=useTags();
    return (
      <Layout>
        <TagList>
          {tags.map(tag => 
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id}>
                <span className="tagline">{tag.name}</span>
                <Icon name="right" />
              </Link>
            </li>)
          }
        </TagList>
        <Center>
          <Space />
            <Button>新增按钮</Button>
        </Center>
      </Layout>
    )
};

export default Tags;