import { createStore, combineReducers } from "redux";
import PostsReducer from "./postReducer";
import PostsPrimeReducer from "./postsReducer";
import ArticleReducer from "./articleReducer";

const rootReducer = combineReducers({
  posts: PostsReducer,
  articles: ArticleReducer,
  postsPrime: PostsPrimeReducer,
});
const store = createStore(rootReducer);

export default store;
