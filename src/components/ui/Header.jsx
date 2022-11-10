import { useState, React } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const setSearchText = useState('');

  return (
    <StContainer>
      <div>EMPLOYEE CARD</div>
        <StSearch handleSearchNote={setSearchText}
				type='text'
				placeholder='type to search...'
			  ></StSearch>
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
  height: 215px;
  text-align: center;
  padding: 20px 20px;
  margin-bottom: 24px;
`;

const StSearch = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 12px;
  display: block;
  padding: 5px;
  margin: 0 auto;
  margin-top: 25px;
`;

const StButton = styled.button`
  height: 40px;
  width: 200px;
  color: white;
  background-color: #29166b;
  border-radius: 12px;
  cursor: pointer;
`;

