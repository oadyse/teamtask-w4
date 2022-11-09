import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search  from "./Search";
import { MdSearch } from 'react-icons/md';



const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <div>EMPLOYEE CARD</div>
      <StSearch>
        <SearchInput >
        <div>
                     <MdSearch className='search-icons' size='1.3em' />
                     <input type='text' placeholder='type to search...' />
        </div>
        </SearchInput>
      </StSearch>
        <StButton onClick={() => {
                navigate("/form");
              }}> 
          Add New Employee
        </StButton>
    </StContainer>
  );
};
export default Header;

const StSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: 10px;
  padding: 0px;
  margin-top: -5px;
  margin-bottom: -20px;
  margin-left: 450px;
`;

const SearchInput = styled.div`
  border: none;
  /* background-color: rgb(233, 233, 233); */
`;



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