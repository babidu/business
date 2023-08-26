import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*
{
  margin: 0px;
  padding: 0px;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
}

html
{
  font-size:62.5%;
  /* overflow-x: hidden; */
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1
{
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  font-size:6rem;
  font-family: 'Work Sans', sans-serif;
}

h2
{
  font-size:3.5rem;
  font-weight:600;
  text-align:center;
}

.logo
{
  font-size:1.8rem;
  background:#000;
  color: ${({ theme }) => theme.colors.color};
  padding: 0.2rem 0.6rem;
  text-transform: capitalize;
  letter-spacing: 0.4rem;
  font-weight:100;
}
.btn
{
  border:0;
  padding: 1.2rem  3.6rem;
  background: ${({ theme }) => theme.colors.btnColor};
  color: #fff;
  font-size: 1.6rem;
  transition:  0.3s;
  cursor: pointer;
}
.btn:hover
{
  transform: scale(0.9);
}

.btn_2
{
  border:0;
  padding: 1rem  3rem;
  background: none;
  color: ${({ theme }) => theme.colors.btnColor};
  font-size: 1.6rem;
  transition:  0.5s;
  cursor: pointer;
  border: .1rem solid;
  border-color: ${({ theme }) => theme.colors.btnColor};
  border-radius: .3rem;
  margin-top:1rem;
  margin-bottom:1.5rem;
}
.btn_2:hover{
  background: ${({ theme }) => theme.colors.btnColor};
  color:#fff;
}

@media (max-width: ${({ theme }) => theme.responsive.mobile}){
 h1
{
  font-weight: 500;
  font-size:4.8rem;
}

h2
{
  font-size:3.1rem;
}

}
@media (max-width: ${({ theme }) => theme.responsive.miniMobile}){
  h1
{

  font-size: 3.8rem;
}
h2
{
  font-size:2.8rem;
}
}

`;
