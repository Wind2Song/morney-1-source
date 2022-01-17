import styled from "styled-components";
import React, { useState } from "react";
const Wrapper  = styled.section`
background: #f5f5f5;
padding: 0 16px;
font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
  value:string,
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props)=>{
  // 受控方式；非受控方式见md截图。
  const note = props.value;
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input 
          type="Text" 
          placeholder='在这里添加备注' 
          value={note}
          onChange={(e)=>{props.onChange(e.target.value)}}
        />
      </label>      
    </Wrapper>
  )
}

export {NoteSection};