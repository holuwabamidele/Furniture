import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { basedb } from "../Base";
import styled from "styled-components";

const ShopDetail = () => {
  const { id } = useParams();
  const [getDescription, setGetDescription] = useState({});

  // console.log(id);

  const getDetail = async (id) => {
    const myData = await getDoc(doc(basedb, "furniture", id));
    setGetDescription({ ...myData.data(), id: myData.id });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  console.log(getDescription);
  return (
    <Container>
      <Wrapper>
        <img src={getDescription.avatar} alt="" />
        <div>
          <h2>{getDescription.title}</h2>
          <p>{getDescription.description}</p>
          <hr />
          <button>MAKE PAYMENT</button>
        </div>
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
  background-color: #f5f5f5;
`;
const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 90%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1005px) {
    justify-content: center;
    align-items: center;
  }

  img {
    width: 500px;
    object-fit: cover;
    @media (max-width: 768px) {
      img {
        background-color: red;
        width: 100px;
      }
      justify-content: center;
      align-items: center;
    }
  }
  div {
    background-color: white;
    font-family: Sora;
    border-radius: 20px;
    height: 100%;
    width: 400px;
    h2 {
      padding: 20px;
      color: #0b3954;
      font-size: 32px;
      line-height: 38px;
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      padding: 20px;
      color: #5c676d;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }
    hr {
      width: 350px;
      margin-bottom: 30px;
    }
    button {
      margin-left: 20px;
      margin-bottom: 20px;
      font-size: 12px;
      cursor: pointer;
      background-color: #0b3954;
      color: white;
      border-radius: 20px;
      height: 30px;
      width: 120px;
      border: 1px solid lightgray;
      &:hover {
        color: #0b3954;
        background-color: white;
      }
    }
  }
`;
