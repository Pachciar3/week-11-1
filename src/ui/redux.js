const ADD_MESSAGE = "ui/ADD_MESSAGE";
const REMOVE_MESSAGE = "ui/REMOVE_MESSAGE"

const INITIAL_STATE = {
  messages: []
};
// [
//   { id: 1, text: "dda", type: "error" },
//   { id: 2, text: "isad as ", type: "success" }
// ]

export const addMessage = (data) => ({ type: ADD_MESSAGE, payload: data });
export const removeMessage = (data) => ({ type: REMOVE_MESSAGE, payload: data });

const redux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { type, text } = action.payload;
      const messages = [...state.messages];
      const id = messages.length ? messages[messages.length - 1].id + 1 : 0;
      const message = {
        id,
        text,
        type
      }
      messages.push(message);
      return {
        ...state,
        messages
      };
    case REMOVE_MESSAGE:
      const mesages = [...state.messages];
      const messagesAfterRemove = mesages.filter((message) => message.id !== action.payload)
      return {
        ...state,
        messages: messagesAfterRemove
      };
    default:
      return state;
  }
};

export default redux;
