import { useState } from "react";
import Styled from "styled-components";
const Contact = () => {
  const [value, setValue] = useState({
    username: "",
    useremail: "",
    description: ""
  });

  const inputValue = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const { value, name } = e.target;

    setValue((preData) => {
      return {
        ...preData,
        [name]: value
      };
    });
  };

  const FromSubmit = (e) => {
    e.preventDefault();
    alert("Form Successfully Submited, Please check Your Email");
  };

  return (
    <Wrapper>
      <h2>Feel Free To Contact Us</h2>

      <section className="service">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6963.290720919522!2d78.5182100922945!3d29.23398421372791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bb7a8906ec45f%3A0xc1062a3343316da!2sKabirpur%20sonipat!5e0!3m2!1sen!2sin!4v1692979007020!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="form_section">
        <form onSubmit={FromSubmit}>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={value.username}
            onChange={inputValue}
          />
          <input
            type="text"
            placeholder="Email"
            name="useremail"
            value={value.useremail}
            onChange={inputValue}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={value.description}
            onChange={inputValue}
          ></textarea>
          <button style={{ marginTop: "3rem" }} className="btn_2">
            Submit
          </button>
        </form>
      </section>
    </Wrapper>
  );
};
export default Contact;

const Wrapper = Styled.div`
width:100%;
padding:5rem 0rem;

.service
  {
  width:100%;
  margin:0 auto;
  padding:3rem 0rem;
  iframe
  {
    width:100%;
    height:40rem;
  }
  }
  .form_section
  {
    width:37%;
    margin:0 auto;

    input{
      width:100%;
      padding: 1.2rem;
      border: .1rem solid rgb(98 84 243);
      margin-top: 1.5rem;
      font-size: 1.4rem;
      box-shadow: ${({ theme }) => theme.colors.boxShodow};
      out-line: none;
    }

    textarea
    {
      width:100%;
      height:12rem;
      border: .1rem solid rgb(98 84 243);
      margin-top: 1.5rem;
      padding: 1.2rem;
      font-size: 1.4rem;
      box-shadow: ${({ theme }) => theme.colors.boxShodow}

    }
   }
}

@media (max-width: ${({ theme }) => theme.responsive.mobile}){
  .form_section
  {
    width: 70%;
  }
  .service iframe
  {
    height:33rem;
  }
}

`;
