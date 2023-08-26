import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import { CgMenuRight, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuShow = () => {
    setMenu(!menu);
  };

  return (
    <>
      <NavbarContainer>
        <div className="header">
          <section id="logo">
            <h3 className="logo"> Babidul Hassan </h3>
          </section>
          <section className={`navigation ${menu ? "show" : ""}`}>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/service">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="mobileMenu">
            <CgMenuRight id="menu" className="navIcon" onClick={menuShow} />
            <CgCloseR id="close" className="navIcon" />
          </section>
        </div>
      </NavbarContainer>
    </>
  );
};

const NavbarContainer = Styled.nav`
  width: 100%;
  padding: 2.7rem;
  background:${({ theme }) => theme.colors.normalBg};
  .header
  {
    width:98%;
    display:flex;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
    ul{
      display:flex;
      gap:5rem;
    }
    .active
    {
      border-bottom:2px solid;
      border-bottom-color: ${({ theme }) => theme.colors.smallTextColor}
    }
    li 
    {
      list-style: none;
    }
    a
    {
      text-decoration:none;
      font-size:1.8rem;
      color: ${({ theme }) => theme.colors.paraColor};
      transition: 0.3s;
    &:hover
    {
      color: ${({ theme }) => theme.colors.btnColor};
    }
    }
    .navIcon
    {
      font-size: 2.3rem;
      color: gray;
      margin-right: 1rem;
      cursor: pointer;
    }
    .show {
      display: block;
    }
    .mobileMenu
    {
      display: none;

    }
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.responsive.mobile} ){
      .navigation
      {
        width:100%;
        height: 90vh;
        text-align: center;
        display:${(props) => (props.mobileMenu ? "block" : "none")};
        align-items:center;
        justify-content:center;
        position:relative;
        padding-top: 15%;
        padding-left: 10%;

      }
      #menu
      {
        /* background:green; */
        position:absolute;
        top:3rem ;
        right: 3rem;
      }
      .header
      {
        width: 100%;
        
        /* .show{
          margin-bottom: -100%;
        } */
        ul{
        flex-direction:column;
        }
        .mobileMenu
        {
          display: block;
          margin-left:5rem;
        }
        #close
        {
          visibility: hidden;
        }
        .navIcon
        {
          margin-right: -2rem;
        }
        #logo
        {
          h3{
            display:block;
            position:absolute;
            top:3rem ;
            left: 3rem;
          }
        }
      }
     

      }
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.responsive.miniMobile} ){
     .navigation
      {
        padding-top: 30%;

      }
      #logo 
      {
        h3
        {
            display:none;
        }
      }
        
          
      
  
`;

export default Navbar;
