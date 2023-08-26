import Styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [topBtnVisible, settopBtnVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const height = 20;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > height) {
      settopBtnVisible(true);
    } else {
      settopBtnVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container>
        {topBtnVisible ? (
          <section>
            <FaChevronUp onClick={goToTop} id="fixedbutton" />
          </section>
        ) : null}
      </Container>
    </>
  );
};

export default TopButton;

const Container = Styled.div`
background: ${({ theme }) => theme.colors.btnColor};
section{
    /* padding: .5rem; */
    width: 5.5rem;
    height: 5.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    margin-right: 2rem;
    background: ${({ theme }) => theme.colors.btnColor};
    position: fixed;
    bottom: 4rem;
    right: 0;
    cursor:pointer;
}
#fixedbutton {
    font-size: 4rem;
    color: #fff;
    animation : ButtonAnimation 1s linear infinite alternate-reverse both;
}

@keyframes ButtonAnimation{
    0%{
      transform: translateY(- .9rem);
    }
    100%{
      transform: translateY( .9rem);
    }
}

`;
