import styled from "styled-components";
const CategorySection  = styled.section`
background: #c4c4c4;
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
export {CategorySection};