import styled from "styled-components";

const ShopDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ShopDetail;
const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled.div``;
