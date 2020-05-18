const postsReducer = (state = [], action) => {
  if (action.type === "ADD_POSTS") {
    return [...action.payload, ...state];
  }
  return state;
};

export default postsReducer;
