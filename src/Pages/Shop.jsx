import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { basedb } from "../Base";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [getMyEntry, setGetMyEntry] = useState([]);
  const getEntry = async () => {
    const Entry = await getDocs(collection(basedb, "furniture"));
    setGetMyEntry(Entry.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getEntry();
  }, []);

  console.log(getMyEntry);
  return (
    <Container>
      <Wrapper>
        {getMyEntry.map((data) => (
          <Card key={data.id}>
            <img src={data.avatar} height="300" width="300" alt="" />
            <h3>{data.title}</h3>
            <Link style={{ textDecoration: "none" }} to={`/detail/${data.id}`}>
              <p>Get item Detail</p>
            </Link>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 70px;
  overflow-x: hidden;
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
  /* @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  } */
  @media (max-width: 554px) {
    justify-content: center;
    align-items: center;
  }
`;
const Card = styled.div`
  background-color: #f5f5f5;
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;
  img {
    height: 200px;
    width: 200px;
  }
  h3 {
    color: #0b3954;
    line-height: 0px;
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-size: 10px;
    line-height: 0px;
  }
`;
