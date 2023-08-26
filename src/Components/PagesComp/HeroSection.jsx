import React from "react";
import Styled from "styled-components";
// import heroImg from "../../image/About2.jpg";

const HeroSection = (props) => {
  const Wrapper = Styled.div`
  width:80%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding:3rem 0px;
  .left_section  .common_text
  {
    text-transform:uppercase;
    color: ${({ theme }) => theme.colors.smallTextColor};
    font-size:1.1rem
  }
  section 
  {
    width:47%;
    overflow:hidden;
    h1 
      {
        line-height: 5.8rem;
        width:30rem;
      }
      p {
        color: ${({ theme }) => theme.colors.paraColor};
        padding : 1.5rem 0rem;
        /* line-height: 2rem; */
        font-size: 1.6rem;
        /* letter-spacing: 0.1rem; */

      }
    img {
      width:100%;
      height:100%;
      animation : imgImage 1.5s ease-in-out infinite alternate-reverse both;
      
    }

    @keyframes imgImage
    {
      0%
      {
        transform: translateY(1rem);
      }
      100%
      {
        transform: translateY(-1rem);

      }
    }
  }
@media (max-width: ${({ theme }) => theme.responsive.mobile}){
  flex-direction : column;
  section 
  {
    width:100%;

    img{
      margin-top: 3rem;
    }
    h1{
      width:60rem;
    }
  }
}
@media (max-width: ${({ theme }) => theme.responsive.miniMobile}){
  h1{
      width: 2.5rem !important;
      line-height: 4.5rem !important;

    }

}
  
  `;

  return (
    <>
      <Wrapper>
        <section className="left_section">
          <p className="common_text">This is Me </p>
          <h1>{props.heading}</h1>
          <p>
            I'm a React js and php Developer . I'm doining a job as a php
            Developer in Indiawebdesign at Guwahati . Now I'm looking a job
            where I can join as a React js Developer
          </p>
          <button className="btn">Hire Me</button>
        </section>
        <section>
          <img src={props.imgSrc} alt="heroimage" />
        </section>
      </Wrapper>
    </>
  );
};
export default HeroSection;
