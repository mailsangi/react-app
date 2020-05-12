import { createStore } from "redux";
import PostsReducer from "./reducer";

const store = createStore(PostsReducer);

export default store;
