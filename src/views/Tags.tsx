import { useTags } from 'useTags';
import Layout from '../components/Layout';

function Tags() {
  const {tags, setTags}=useTags();
    return (
      <Layout>
        <h2>标签页面</h2>        
      </Layout>
    )
};

export default Tags;