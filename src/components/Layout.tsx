import Nav from './Nav';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
// flex-grow: 1;表示标签高度尽量高；下一行表示滚动条就只在这个标签里
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
  }
`;

type Props = {
  scrollTop?:number;
  className?:string;
}
const Layout:React.FC<Props>  = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    setTimeout(()=>{
      if(!mainRef.current){return;}
      mainRef.current.scrollTop = props.scrollTop!;
    },0)
  },[props.scrollTop])
  return (
      <Wrapper>
          <Main ref={mainRef} className={props.className}>
              {props.children}        
          </Main>
          <Nav />
      </Wrapper>
  )
};
Layout.defaultProps = {
  scrollTop:0
}

export default Layout;