import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Icon from "./Icon";
// import  X from 'icons/money.svg';
// console.log(X) // 使用import必须要有log，否则treeshaking会删除这句子代码；使用require可以避免

const NavWrapper = styled.nav`
background: #ffffff;
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
                    <NavLink to="/tags" activeStyle={{color: "#3088A8", fill: "#3088A8"}}>
                        <Icon name="tags"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeStyle={{color: "#38A088", fill: "#3088A8"}}>
                        <Icon name="money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeStyle={{color: "#3088A8", fill: "#3088A8"}}>
                        <Icon name="statics"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;