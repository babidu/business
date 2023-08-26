import React, { useState, useEffect } from "react";
import Styled from "styled-components";
// import heroImg from "../../image/About2.jpg";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const productsData = response.data.products;
        console.log(productsData);
        setProducts(productsData);
      } catch (e) {
        console.error("api fetch error", e);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Wrapper>
        <h2>Our Products</h2>

        <section className="service">
          <section className="service_heading">
            {products.slice(0, 6).map((cData, ind) => {
              return (
                <section className="service_box" key={ind}>
                  <img src={cData.thumbnail} alt="serviceimg" />
                  <h3> {cData.brand} </h3>
                  <p>{cData.description.substring(0, 70)}</p>
                  <button className="btn_2">Read More</button>
                </section>
              );
            })}
          </section>
        </section>
      </Wrapper>
    </>
  );
};
export default Products;

const Wrapper = Styled.div`
width:100%;
padding:5rem 0rem;

h2{
    background: ${({ theme }) => theme.colors.normalBg};
    padding: 1rem 0rem;
  }
.service
{
  width:80%;
  margin:0 auto;
  padding:3rem 0rem;
  

  .service_heading
  {
    width:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap: wrap;
    .service_box
    {
      width:28%;
      border: .1rem solid lightgrey;
      overflow:hidden;
      text-align:center;
      margin-top: 2rem;
      border-radius: .3rem;
      overflow:hidden;
      img{
          width:90%;
          height: 21rem;
          transition: 0.5s;
          margin-top:1rem;
          cursor:pointer;
          overflow:hidden;
          border-top-left-radius: .3rem;
          border-top-right-radius: .3rem;


        &:hover
        {
          transform: scale(1.1);
        }
        }
        p{
          padding: .2rem 0rem;
          font-size:1.5rem;
          text-align:justify;
           padding: .5rem 1rem ;

        }
        h3{
          text-align:left;
          font-size:1.9rem;
          margin-top:1.2rem;
          padding: .5rem 1rem ;
        }
    }
  }
}

@media (max-width: ${({ theme }) => theme.responsive.mobile}){
  .service_heading
  {
    flex-direction: column;
    flex-wrap: nowrap;
    .service_box{
    width:100% !important;
  }
  .service_box
    {
      img{
          height: 18rem !important;
  }
}

`;
