// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
// Todo ADD action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

// Todo DELETE action creator
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

// GET ID action creator
export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

// initial state
const initialState = {
    todos: [
        {
            id: "1",
            name: "Liam",
            birth_place: "Manado",
            birth_date: "31 Jan 2001",
            address: "Manado",
            phone: "085784378582",
            description: "hahahahhahahahahhaha",
        },
    ],
    todo: {
        id: "0",
        name: "",
        birth_place: "",
        birth_date: "",
        address: "",
        phone: "",
        description: "",
    },
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case GET_TODO_BY_ID:
            return {
                ...state,
                todo: state.todos.find((todo) => {
                    return todo.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default todos;
