import Nav from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
// flex-grow: 1;表示标签高度尽量高；下一行表示滚动条就只在这个标签里
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Layout = (props:any) => {
    return (
        <Wrapper>
            <Main className={props.className}>
                {props.children}        
            </Main>
            <Nav />
        </Wrapper>
    )
};

export default Layout;