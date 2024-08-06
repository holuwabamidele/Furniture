import styled from "styled-components";
import { LuArmchair } from "react-icons/lu";
import { LiaBedSolid } from "react-icons/lia";
import { MdTableRestaurant } from "react-icons/md";
import { MdDesk } from "react-icons/md";
import { FcFilingCabinet } from "react-icons/fc";
import { GiBedLamp } from "react-icons/gi";

const PageTwo = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <LuArmchair />
          <h3>Chairs</h3>
        </Card>
        <Card>
          <LiaBedSolid />
          <h3>Beds</h3>
        </Card>
        <Card>
          <MdTableRestaurant />
          <h3>Tables</h3>
        </Card>
        <Card>
          <MdDesk />
          <h3>Desks</h3>
        </Card>
        <Card>
          <FcFilingCabinet />
          <h3>Cabinets</h3>
        </Card>
        <Card>
          <GiBedLamp />
          <h3>Lighting</h3>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PageTwo;

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
  @media (max-width: 370px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  background-color: #f3f3f3;
  height: 200px;
  width: 170px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  cursor: pointer;
  margin: 20px 0px;

  &:hover {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  h3 {
    font-size: 20px;
  }
`;
