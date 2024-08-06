import styled from "styled-components";
import batcha from "../assets/batcha lamp.webp";

const Shop = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
      </Wrapper>
    </Container>
  );
};
export default Shop;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 100px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const Card = styled.div`
  height: 440px;
  width: 340px;
  margin-top: 20px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  img {
    width: 300px;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    justify-content: center;
    img {
      width: 300px;
    }
  }
  h4 {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #0b3954;
    cursor: pointer;
  }
`;
