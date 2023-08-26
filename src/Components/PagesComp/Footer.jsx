import React from "react";
import Styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCopyright
} from "react-icons/fa";

const Footer = () => {
  const Wrapper = Styled.div`
  width:100%;
  background: ${({ theme }) => theme.colors.footerBg} ;
  padding: 2rem 0rem;
  margin-top:6rem;
  .Footer_section
  {
  width:70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 3rem 0rem;
  background:${({ theme }) => theme.colors.normalBg};
  color :#000;
  justify-content:space-around;
  border-radius:.6rem;
  margin-top:-7.5rem;
  z-index:9 !important;
  box-shadow: ${({ theme }) => theme.colors.boxShodow};
  p{
    font-size:1.6rem;
    width:18rem;
    color:${({ theme }) => theme.colors.paraColor};
    font-weight:500;
  }
  }
  .main_footer
  {
    width:80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding:6rem 0rem;
    color: ${({ theme }) => theme.colors.color};
    justify-content:space-between;
    section{
      width:22%;
      h4{
        font-size:1.6rem;
        font-weight:100;
      }
      p{
        font-size:1.2rem;
        font-weight:100;
        color:lightgrey;
        padding-top: .7rem;
      }
      input{
        width:70%;
        border:0;
        padding: .9em;
        margin-top: .8rem;
        margin-bottom: 1rem;

        &:focus
        {
          outline:0;
        }
      }
      button{
        padding: 1.01rem 1.8rem;
        border-radius: .2rem;
      }
    }
    .icon
    {
      font-size:4.3rem;
      border-radius: 5rem;
      padding: .7rem;
      border:  .1rem solid #fff;
    }
    .icon_2
    {
      margin-left: 1rem;
    }
  }
  .main_footer_2
    {
      border-top: .1rem solid lightgrey;
      width:100%;
      padding-top:3.5rem;
      padding-bottom:5rem;

      div 
      {
      width:80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.color};
      justify-content:space-between;
    section{
      width:45%;
      p{
        font-size:1.5rem;
        color:lightgrey;

      }
     }
  }
}

@media(max-width: ${({ theme }) => theme.responsive.mobile}){
  .main_footer
  {
    flex-direction: column;

    section{
      width:100%;
      padding-top: 2.5rem;
    }
  }  
}

@media (max-width: ${({ theme }) => theme.responsive.mobile}){
  .Footer_section
  {
    flex-direction:column;
    p{
    font-size: 1.2rem;
    }
    button
    {
      margin-top: 1rem;
      /* align-items: left; */
      border-radius: .4rem;
      padding : .8rem 1rem;
    }
  }
}
@media (max-width: ${({ theme }) => theme.responsive.miniMobile}){
  .main_footer_2 div
  {
    flex-direction: column;
    align-items: start;

    section{
      width:95%;
    }
  }
}


  `;

  return (
    <>
      <Wrapper>
        <div className="Footer_section">
          <section className="footer_top">
            <p>Ready to get started? Talk to us today</p>
          </section>
          <section className="footer_top">
            <button className="btn"> Get Started </button>
          </section>
        </div>

        {/* main footer  */}
        <div className="main_footer">
          <section>
            <h4>Hassan</h4>
            <p>
              I'm a React js and php Developer . I'm doining a job as a php
              Developer in Indiawebdesign at Guwahati
            </p>
          </section>
          <section>
            <h4>Subscribe to get important updates</h4>
            <input type="text" placeholder="Email" />
            <button className="btn"> Subscribe </button>
          </section>
          <section className="icon_section">
            <h4>Follow Us</h4>
            <p>
              <FaFacebook className="icon" />
              <FaInstagram className="icon icon_2" />
              <FaYoutube className="icon icon_2" />
            </p>
          </section>
          <section>
            <h4>Call Us</h4>
            <p> +91 000 000 9999 </p>
          </section>
        </div>

        <div className="main_footer_2">
          <div>
            <section>
              <p>
                <FaCopyright /> 2023 BabidulHassan. All Rights Reserved
              </p>
            </section>
            <section>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS </p>
            </section>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
