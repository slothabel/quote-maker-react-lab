import uuid from "uuid";

export default (state = {quote: []}, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {id: uuid(), content: action.content, author: action.author }
      return {...state, quote: [...state.quote, quote]}
      // break;
  
    default:
      return state;
  }
}
