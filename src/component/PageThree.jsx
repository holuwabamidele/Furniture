import styled from "styled-components";
import bedroom from "../assets/Bedroom.jpg";
import kitchen from "../assets/Kitchen.jpg";
import office from "../assets/Office.jpg";

const PageThree = () => {
  return (
    <Container>
      <Wrapper>
        <Card style={{ backgroundImage: `url(${bedroom})` }}>
          <h1>BEDROOM</h1>
        </Card>
        <Card style={{ backgroundImage: `url(${office})` }}>
          <h1>OFFICE</h1>
        </Card>
        <Card style={{ backgroundImage: `url(${kitchen})` }}>
          <h1>KITCHEN</h1>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PageThree;

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
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Card = styled.div`
  height: 550px;
  width: 400px;
  /* background-color: rebeccapurple; */
  border-radius: 30px;
  margin: 0px 10px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: end;
  flex-direction: column;
  /* flex-wrap: wrap; */
  @media (max-width: 1024px) {
    height: 350px;
    width: 600px;
    margin: 10px 0px;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: end;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  h1 {
    font-size: 48px;
    color: white;
    padding-left: 40px;
    padding-bottom: 50px;
    cursor: pointer;
  }
`;
