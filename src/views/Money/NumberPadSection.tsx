import styled from "styled-components";
import React, { useState } from 'react';
const Wrapper  = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    line-height: 72px;
    font-size: 36px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      float: left;      width: 25%;      height: 64px;      border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%;}
      &:nth-    child(1){background: #f2f2f2;}
      &:nth-child(2),
      &:nth-child(5){background: #e0e0e0;}
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){background: #d3d3d3;}
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){background: #c1c1c1;}
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){background: #b8b8b8;}
      &:nth-child(12){background: #9a9a9a;}
      &:nth-child(14){background: #a9a9a9;}
    }
  }
`;
const NumberPadSection:React.FC = ()=>{
  const [output, setOutput] = useState('0');
  const onClickButtonNumber = (e:React.MouseEvent) => {
    // 把被点击的button标签打印出来，打印的是e.target
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null){return}
    switch(text){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if(output === '0'){
          setOutput(text);
        }else{
          setOutput(output + text)
        }
        break;
      
    }
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='pad clearfix' onClick={onClickButtonNumber}>
        <button>1</button>
        <button>2</button>
        <button>3</button><button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button><button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection};