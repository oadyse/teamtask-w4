import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import deleteComment from "../../../redux/modules/comments.js";

const ListComment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const onDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <StListContainer>
      <StListWrapper>
        {comments.map((comment) => {
          <StTodoContainer key={comment.id}>
            <div>
              <h2 className="todo-title">{comment.title}</h2>
              <div>{comment.body}</div>
            </div>
            <StDialogFooter>
              <StButton
                borderColor="red"
                onClick={() => onDeleteComment(comment.id)}
              >
                Delete
              </StButton>
            </StDialogFooter>
          </StTodoContainer>
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default ListComment;

const StListContainer = styled.div`
  padding: 0 24px;
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
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
