import styled from "styled-components";
import logo from "../assets/furniturelogo.svg";
import apple from "../assets/Payment/ApplePay.svg";
import google from "../assets/Payment/GooglePay.svg";
import master from "../assets/Payment/Mastercard.svg";
import pal from "../assets/Payment/PayPal.svg";
import visa from "../assets/Payment/Visa.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Furniture>
          <img src={logo} alt="" />
          <p>
            Quam pulvinar leo euismod id eu <br /> ultricies. Placerat proin
            rhoncus <br />
            sit.
          </p>
          <button>CONTACT US</button>
          <Card>
            <main>
              <img src={visa} alt="" />
            </main>
            <main>
              <img src={master} alt="" />
            </main>
            <main>
              <img src={pal} alt="" />
            </main>
            <main>
              <img src={google} alt="" />
            </main>
            <main>
              <img src={apple} alt="" />
            </main>
          </Card>
        </Furniture>
        <Useful>
          <h4>USEFUL LINKS</h4>
          <h4>HOME</h4>
          <h4>SHOP</h4>
          <h4>COLLECTION</h4>
          <h4>ABOUT</h4>
          <h4>CONTACT</h4>
          <br />
          <h4>DELIVERY</h4>
          <h4>HOW IT WORKS</h4>
          <h4>FREE DELIVERY</h4>
          <h4>FAQ</h4>
        </Useful>
        <Customer>
          <h4>CUSTOMER SERVICE</h4>
          <h4>ORDER</h4>
          <h4>DOWNLOADS</h4>
          <h4>ADDRESS</h4>
          <h4>ACCOUNT DESTAILS</h4>
          <h4>LOST PASSWORD</h4>
        </Customer>
        <Need>
          <h4>NEED HELP?</h4>
          <span>+61 3 8376 6284</span> <br />
          <span>+61 3 8376 6284</span>
          <h4>
            MONDAY-FRIDAY <br />
            8AM - 5PM
          </h4>
          <h4>
            SATYRDAY-SUNDAY <br />
            10AM - 2PM
          </h4>
        </Need>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin: 50px 50px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Furniture = styled.div`
  img {
    /* background-color: red; */
    width: 180px;
    @media (max-width) {
      justify-content: center;
    }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5c676d;
  }
  button {
    margin-top: 30px;
    margin-bottom: 40px;
    width: 150px;
    height: 40px;
    background-color: #0b3954;
    color: white;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    font-family: Serif;
    border: none;
    cursor: pointer;
    &:hover {
      color: #0b3954;
      background-color: white;
    }
  }
`;
const Useful = styled.div`
  h4 {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #2a2b39;
    cursor: pointer;
  }
`;
const Customer = styled.div`
  h4 {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #2a2b39;
    cursor: pointer;
  }
`;
const Need = styled.div`
  h4 {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #2a2b39;
  }
  span {
    color: #ffb128;
    cursor: pointer;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  main {
    background-color: white;
    border: 2px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 25px;
    margin-right: 3px;
    border-radius: 3px;
    img {
      cursor: pointer;
    }
  }
`;
