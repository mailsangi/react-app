export default function PostsReducer(state = [], action) {
  console.log("REceieved a command", state);
  if (action.type === "ADD_POST") {
    const newState = [action.payload, ...state];
    console.log("New state", newState);
    return newState;
  }
  if (action.type === "REPLACE_POSTS") {
    const newState = [...action.payload];
    console.log("New state", newState);
    return newState;
  }
  if (action.type === "DEL_POST") {
    const newState = state.filter((el, index) => index !== action.payload);
    console.log("New state", newState);
    return newState;
  }
  if (action.type === "INC_LIKES") {
    const newState = [...state];
    const { payload } = action;
    newState[payload.index].likes = payload.currentLikes + 1;
    return newState;
  }
  if (action.type === "INC_DISLIKES") {
    const newState = [...state];
    const { payload } = action;
    newState[payload.index].disLikes = payload.currentdisLikes + 1;
    return newState;
  }
  if (action.type === "UPDATE_POST") {
    const { payload } = action;
    const post = state[payload.index];
    post.title = payload.post.title;
    post.description = payload.post.description;
    const newState = [...state];
    newState[payload.index] = post;
    return newState;
  }
  return state;
}
