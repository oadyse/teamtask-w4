import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search  from "./Search";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <div>EMPLOYEE CARD</div>
      <Search />
        <StButton onClick={() => {
                navigate("/form");
              }}> 
          Add New Employee
        </StButton>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  background-color: #2ca6d6;
  font-size: 60px;
  height: 200px;
  text-align: center;
  padding: 20px 20px;
  margin-bottom: 24px;
`;

const StButton = styled.button`
  height: 40px;
  width: 200px;
  color: white;
  background-color: #29166b;
  border-radius: 12px;
  cursor: pointer;
`;