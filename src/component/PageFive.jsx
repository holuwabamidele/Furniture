import styled from "styled-components";
import batcha from "../assets/batcha lamp.webp";
import table from "../assets/corner table.webp";
import circle from "../assets/circle lamp.webp";
import cozy from "../assets/cozy chair.webp";
import dining from "../assets/dining table.webp";
import fancy from "../assets/fancy chair.webp";

const PageFive = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <img src={batcha} alt="" />
          <br />
          <h4>Batcha Lamp</h4>
        </Card>
        <Card>
          <img src={table} alt="" />
          <br />
          <h4>Circle corner table</h4>
        </Card>
        <Card>
          <img src={circle} alt="" />
          <br />
          <h4>Circle Lamp</h4>
        </Card>
        <Card>
          <img src={cozy} alt="" />
          <br />
          <h4>Cozy armchair</h4>
        </Card>
        <Card>
          <img src={dining} alt="" />
          <br />
          <h4>Dining table</h4>
        </Card>
        <Card>
          <img src={fancy} alt="" />
          <br />
          <h4>Fancy armchair</h4>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PageFive;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: red; */
  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 250px;
    }
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
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
      width: 200px;
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
