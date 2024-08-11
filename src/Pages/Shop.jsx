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
            <h2>{data.title}</h2>
            <Link to={`/detail/${data.id}`}>
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
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;
const Card = styled.div``;
