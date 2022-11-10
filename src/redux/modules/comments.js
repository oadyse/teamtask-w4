// Action value
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT_BY_ID = "GET_COMMENT_BY_ID";
const DELETE_COMMENT = "DELETE_COMMENT";

// Action Creator
// comment ADD action creator
export const addComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

// comment DELETE action creator
export const deleteComment = (payload) => {
    return {
        type: DELETE_COMMENT,
        payload,
    };
};

// GET ID action creator
export const getCommentByID = (payload) => {
    return {
        type: GET_COMMENT_BY_ID,
        payload,
    };
};

// initial state
const initialState = {
    comments: [
        {
            id: "1",
            title: "1",
            body: "1",
        },
    ],
    comment: {
        id: "0",
        title: "0",
        body: "0",
    },
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((comment) => comment.id !== action.payload),
            };

        case GET_COMMENT_BY_ID:
            return {
                ...state,
                comment: state.comments.find((comment) => {
                    return comment.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default comments;
