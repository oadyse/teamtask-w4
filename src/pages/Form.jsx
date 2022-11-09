import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todos.js";

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    name: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.name.trim() === "" || todo.body.trim() === "") return;

    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      name: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <div>
        <h1>Form for Employee</h1>
      </div>
      <StInputGroup>
        <StFormLabel>Name</StFormLabel>
        <StAddInput
          type="text"
          name="name"
          value={todo.name}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Birth Place</StFormLabel>
        <StAddInput
          type="text"
          name="birth_place"
          value={todo.birth_place}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Date of Birth</StFormLabel>
        <StAddInput
          type="date"
          name="birth_date"
          value={todo.birth_date}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Address</StFormLabel>
        <StAddInput
          type="text"
          name="address"
          value={todo.address}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Number Phone</StFormLabel>
        <StAddInput
          type="text"
          name="phone"
          value={todo.phone}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Status</StFormLabel>
        <StAddInput
          type="text"
          name="status"
          value={todo.status}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StInputGroup>
        <StFormLabel>Description</StFormLabel>
        <StAddInput
          type="text"
          name="description"
          value={todo.description}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>Add New</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  width: 150px;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  padding: 30px;
  gap: 20px;
  width: 55%;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 500px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  margin: 10px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
  margin-top: 20px;
`;
