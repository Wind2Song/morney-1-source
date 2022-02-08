import { useState } from "react";
import styled from "styled-components";
const Wrapper  = styled.section`
font-size: 24px;
  > ul{
    display: flex;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0px;
      position: relative;
      &.selected::after{
          content:'';
          display: block;
          bottom: 0;
          height: 3px;
          background: #333;
          position: absolute;
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;

type Props = {
  value:'-' | '+',
  onChange:(value:'-' | '+')=>void
}

const CategorySection:React.FC<Props> = (props) => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const categoryMap = {'-':'支出' , '+':'收入'};
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c)=>
          <li className={category === c ? 'selected' : ''}
              onClick={()=>{props.onChange(c)}}
              key={c}
            >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}


export {CategorySection};