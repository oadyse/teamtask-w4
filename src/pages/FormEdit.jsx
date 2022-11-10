import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todos.js";

const FormEdit = () => {
  const id = nextId();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    name: "",
    birth_place: "",
    birth_date: "",
    address: "",
    phone: "",
    description: "",
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.name.trim() === "" || todo.description.trim() === "") return;
    
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      name: "",
      birth_place: "",
      birth_date: "",
      address: "",
      phone: "",
      description: "",
    });

    navigate("/");
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StButton
        borderColor="#ddd"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to List
      </StButton>
      <StTitle>Form for Employee</StTitle>
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
        <StFormLabel>Description</StFormLabel>
        <StAddTextarea
          type="text"
          name="description"
          value={todo.description}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton onClick={onSubmitHandler} 
      >Add New</StAddButton>
    </StAddForm>
  );
};

export default FormEdit;

const StTitle = styled.h1`
  text-align: center;
  margin-top: 0;
`;

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
  margin: 30px auto;
  align-items: center;
  padding: 30px;
  padding-top: 10px;
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

const StAddTextarea = styled.textarea`
  height: 100px;
  width: 500px;
  border: none;
  border-radius: 12px;
  padding: 12px;
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
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;