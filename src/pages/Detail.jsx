import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to List
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.name}</StTitle>
          <StGroup>
            <StLabel>Place & Date Of Birth</StLabel>
            <StValue>: {todo.birth_place}, {todo.birth_date}</StValue>
          </StGroup>
          <StGroup>
            <StLabel>Address</StLabel>
            <StValue>: {todo.address}</StValue>
          </StGroup>
          <StGroup>
            <StLabel>Number Phone</StLabel>
            <StValue>: {todo.phone}</StValue>
          </StGroup>
          <StGroup>
            <StLabel>Description</StLabel>
            <StValue>: {todo.description}</StValue>
          </StGroup>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const StLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  width: 30%;
  padding-left: 24px;
`;

const StValue = styled.main`
  width: 70%;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
