import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../../redux/modules/todos.js";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StListContainer>
      <h2>List</h2>
      <StListWrapper>
        {todos.map((todo) => {
            return (
              <StTodoContainer key={todo.id}>
                <StButton
                  borderColor="red"
                  onClick={() => onDeleteTodo(todo.id)}
                >
                  ❌
                </StButton>
                <div>
                  <h2 className="todo-title">{todo.name}</h2>
                  <div>{todo.description}</div>
                </div>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>View Detail ...</div>
                </StLink>
              </StTodoContainer>
            );
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 120px;
  width: 1000px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  background-color: #00808065;
`;

const StLink = styled(Link)`
  text-decoration: none;
  float: right;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  float: right;
  margin-right: 0;
`;
