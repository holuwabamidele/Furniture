import styled from "styled-components";
import pic1 from "../assets/furniture pic1.webp";

const PageOne = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <div>BEFURNITURE</div>
          <h1>
            LUXURY <br /> FURNITURE
          </h1>
          <ButtonHold>
            <main>
              <button>GO TO SHOP</button>
            </main>
            <section>
              <button>SEE COLLECTION</button>
            </section>
          </ButtonHold>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default PageOne;

const Container = styled.div`
  margin-bottom: 100px;
  height: 110vh;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  background-color: #0b3954;
  width: 90%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    background-color: transparent;
    width: 90%;
  }
`;

const Content = styled.div`
  margin-top: 50px;
  font-family: Sora;
  background-image: url(${pic1});
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 92%;
  padding-left: 50px;
  border-radius: 30px;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  div {
    margin-top: 50px;
    font-size: 12px;
    line-height: 25px;
    font-weight: 600;
    color: white;
  }
  h1 {
    margin: 0;
    font-size: 64px;
    line-height: 72px;
    font-weight: 700;
    color: white;
    @media (max-width: 786px) {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;
const ButtonHold = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  @media (max-width: 786px) {
    margin-top: -50px;
  }

  main {
    button {
      cursor: pointer;
      height: 40px;
      width: 150px;
      background-color: #ffb128;
      margin: 0px 10px;
      color: white;
      border-radius: 30px;
      border: none;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      font-family: Sora;
      @media (max-width: 786px) {
        font-size: 12px;
        line-height: 26px;
        height: 30px;
        width: 120px;
        margin-right: 10px;
        margin-left: 0;
      }
    }
  }
  section {
    button {
      cursor: pointer;
      height: 40px;
      width: 200px;
      background-color: white;
      margin: 0px 10px;
      color: #ffb128;
      border-radius: 30px;
      border: none;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      font-family: Sora;
      @media (max-width: 786px) {
        font-size: 12px;
        line-height: 26px;
        height: 30px;
        width: 160px;
        margin: 0;
      }
    }
  }
`;
