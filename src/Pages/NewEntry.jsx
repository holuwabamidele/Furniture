import styled from "styled-components";

const NewEntry = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/new">
          <input type="file" />
          <br />
          <input type="Title" placeholder="Item Title" />
          <br />
          <textarea placeholder="Enter Item Description"></textarea>
          <br />
          <button>SUBMIT</button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NewEntry;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
const Link = styled.div`
  button {
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    cursor: pointer;
    background-color: white;
    color: #0b3954;
    &:hover {
      background-color: #0b3954;
      color: white;
    }
  }
`;
