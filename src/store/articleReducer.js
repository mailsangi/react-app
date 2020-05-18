const articleReducer = (state = [], action) => {
  if (action.type === "ADD_ARTICLE") {
    return [action.payload, ...state];
  }
  return state;
};

export default articleReducer;
