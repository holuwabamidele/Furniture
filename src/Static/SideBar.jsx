import styled from "styled-components";
import { LuArmchair } from "react-icons/lu";
import { LiaBedSolid } from "react-icons/lia";
import { MdTableRestaurant } from "react-icons/md";
import { MdDesk } from "react-icons/md";
import { FcFilingCabinet } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NewEntry from "../Pages/NewEntry";
import Swal from "sweetalert2";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <div>
              <nav>
                <FaShoppingCart />
              </nav>
              <span>Shops</span>
            </div>
          </Link>
          <div
            onClick={() => {
              Swal.fire("Update coming soon!");
            }}
          >
            <nav>
              <LuArmchair />
            </nav>
            <span>Chairs</span>
          </div>
          <div
            onClick={() => {
              Swal.fire("Update coming soon!");
            }}
          >
            <nav>
              <LiaBedSolid />
            </nav>
            <span>Beds</span>
          </div>
          <div
            onClick={() => {
              Swal.fire("Update coming soon!");
            }}
          >
            <nav>
              <MdTableRestaurant />
            </nav>
            <span>Tables</span>
          </div>
          <div
            onClick={() => {
              Swal.fire("Update coming soon!");
            }}
          >
            <nav>
              <MdDesk />
            </nav>
            <span>Desks</span>
          </div>
          <div
            onClick={() => {
              Swal.fire("Update coming soon!");
            }}
          >
            <nav>
              {" "}
              <FcFilingCabinet />
            </nav>
            <span>Cabinets</span>
          </div>
          <Link to="/new">
            <button onClick={<NewEntry />}>Submit Entry</button>
          </Link>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 45vh;
  width: 130px;
  background-color: #0b3954;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Navigation = styled.div`
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    cursor: pointer;
    color: white;
    nav {
      font-size: 20px;
      margin-right: 5px;
    }
  }
`;
