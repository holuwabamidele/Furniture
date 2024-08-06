import logo from "../assets/furniturelogo.svg";
import styled from "styled-components";
import { GoBriefcase } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import SideBar from "../Static/SideBar";
import NewEntry from "../Pages/NewEntry";
import { FaShoppingCart } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import { LiaBedSolid } from "react-icons/lia";
import { MdTableRestaurant } from "react-icons/md";
import { MdDesk } from "react-icons/md";
import { FcFilingCabinet } from "react-icons/fc";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navigation>
          <Link style={{ textDecoration: "none" }} to="/shop">
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
        </Navigation>
        <Icon>
          <div>
            <GoBriefcase />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <AiOutlineUser />
          </div>
          <Link to="/new">
            <button onClick={<NewEntry />}>SUBMIT ENTRY</button>
          </Link>
        </Icon>
        <SideNav onClick={handleToggle}>
          <IoReorderThree />
        </SideNav>
      </Wrapper>
      <div>{toggle ? <SideBar /> : null}</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: Sora;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 100px;
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 250px;
    cursor: pointer;
  }
  input {
    width: 200px;
    height: 40px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1124px) {
    display: none;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    cursor: pointer;
    /* background-color: red; */
    nav {
      font-size: 20px;
      color: #0b3954;
      /* background-color: aqua; */
      align-items: center;
      margin-right: 5px;
    }
    span {
      text-transform: uppercase;
      font-size: 12px;
      color: #0b3954;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #0b3954;
  /* background-color: red; */
  @media (max-width: 1124px) {
    display: none;
  }
  div {
    margin: 0px 10px;
    font-size: 20px;
    cursor: pointer;
  }
  button {
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
`;
const SideNav = styled.div`
  display: none;
  @media (max-width: 1124px) {
    display: block;
    font-size: 40px;
    align-items: center;
    cursor: pointer;
    color: #0b3954;
  }
`;
