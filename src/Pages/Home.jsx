import styled from "styled-components";
import PageFive from "../component/PageFive";
import PageFour from "../component/PageFour";
import PageOne from "../component/PageOne";
import PageThree from "../component/PageThree";
import PageTwo from "../component/PageTwo";

const Home = () => {
  return (
    <Container>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 20vh);
  margin-top: 100px;
  overflow-x: hidden;
`;
