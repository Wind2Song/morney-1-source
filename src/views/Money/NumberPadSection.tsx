import React, { useState } from 'react';
import { GeneratorOutput } from './NumberSection/Generatoroutput';
import { Wrapper } from "./NumberSection/Wrapper";

type Props = {
  value:number,
  onChange:(value:number)=>void,
  onOK ?: ()=>void
};
const NumberPadSection:React.FC<Props> = (props)=>{
  const output = props.value.toString()
  const setOutput = (output:string) =>{
    let value
    if(output.length > 16){
      value = parseFloat(output.slice(0,16));
    }else if(output.length === 0){
      value = 0;
    }else{
      value = parseFloat(output)
    }
    props.onChange(value)
  }
  const onClickButtonNumber = (e:React.MouseEvent) => {
    // 把被点击的button标签打印出来，打印的是e.target
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null){return}
    if(text === 'OK'){
      if(props.onOK)props.onOK();
      return;
    }
    if('0123456789.'.split('').concat(['删除', '清空']).indexOf(text)>=0){
      setOutput(GeneratorOutput(text,output))
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
        <button className="dot" onClick={()=>console.log('点了')}>.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection};