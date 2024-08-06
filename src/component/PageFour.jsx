import styled from "styled-components";
import image from "../assets/pic4.webp";
import Swal from "sweetalert2";

const PageFour = () => {
  return (
    <Container>
      <Wrapper>
        <ImageArea>
          <img src={image} alt="" />
        </ImageArea>
        <TextArea>
          <span>SEARCH FOR</span>
          <h1>
            GET READY <br />
            FOR A SPRING
          </h1>
          <p>
            Metus ultricies curabitur sodales <br /> ipsum elit cubilia.
          </p>
          <button
            onClick={() => {
              Swal.fire("Trends coming soon!");
            }}
          >
            ACTUAL TRENDS
          </button>
        </TextArea>
      </Wrapper>
    </Container>
  );
};

export default PageFour;

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
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;
const ImageArea = styled.div`
  img {
    width: 550px;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const TextArea = styled.div`
  font-family: Sora;
  /* background-color: aqua; */
  width: 500px;
  @media (max-width: 500px) {
    width: 90%;
  }
  span {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #0b3954;
  }
  h1 {
    font-size: 48px;
    line-height: 55px;
    font-weight: 700;
    color: #0b3954;
    @media (max-width: 500px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5c676d;
  }
  button {
    font-family: Sora;
    font-weight: 700;
    height: 40px;
    width: 200px;
    background-color: #ffb128;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    &:hover {
      background-color: #0b3954;
    }
  }
`;
