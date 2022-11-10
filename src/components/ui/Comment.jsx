import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addComment } from "../../redux/modules/comments.js";

function Comment() {
  const id = nextId();
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: 0,
    title: "",
    body: "",
  });
  ;
  const onChangeHandler = (event) => {
    const { title, value } = event.target;
    setComment({ ...comment, [title]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.title.trim() === "" || comment.body.trim() === "")
      return;

    dispatch(addComment({ ...comment, id }));
    setComment({
      id: 0,
      title: "",
      body: "",
    });
  };

  return (
    <CmAddForm onSubmit={onSubmitHandler}>
      <CmInputGroup>
        <CmFormLabel>Name</CmFormLabel>
        <CmAddInput
          type="text"
          name="title"
          value={comment.title}
          onChange={onChangeHandler} />
      </CmInputGroup>
      <CmInputGroup>
        <CmFormLabel>Comment</CmFormLabel>
        <CmAddInput
          type="text"
          name="body"
          value={comment.body}
          onChange={onChangeHandler} />
      </CmInputGroup>
      <CmAddButton onClick={onSubmitHandler} >Add New</CmAddButton>
    </CmAddForm>
  );
}

export default Comment;

const CmAddForm = styled.form`
  background-color: #eee;
  align-items: center;
  padding: 20px;
`;

const CmInputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const CmFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right: 30px;
`;

const CmAddInput = styled.input`
  height: 30px;
  width: 400px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const CmAddButton = styled.button`
  border: none;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 100px;
  color: #fff;
  font-weight: 700;
  float: right;
  margin-top: 10px;
`;
