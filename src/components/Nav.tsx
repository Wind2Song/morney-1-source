import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Icon from "./Icon";
// import  X from 'icons/money.svg';
// console.log(X) // 使用import必须要有log，否则treeshaking会删除这句子代码；使用require可以避免

const NavWrapper = styled.nav`
line-height: 24px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li {
      width: 33.33333%;
      text-align:center;
      > a {
        padding: 16px;
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
            width: 24px;
            height: 24px;
        }
      }
    }
  }
`;

const Nav = ()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="tags"/>
                        标签页
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="money"/>
                        记账页
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="statics"/>
                        统计页
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;