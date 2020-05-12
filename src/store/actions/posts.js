export const addPost = (obj) => ({
  type: "ADD_POST",
  payload: obj,
});

export const fetchPosts = (obj) => ({
  type: "FETCH_POSTS",
});

export const deletePost = (index) => ({
  type: "DEL_POST",
  payload: index,
});

export const incLikes = (index, currentLikes) => ({
  type: "INC_LIKES",
  payload: { index, currentLikes },
});

export const incDislikes = (index, currentdisLikes) => ({
  type: "INC_DISLIKES",
  payload: { index, currentdisLikes },
});

export const replacePosts = (posts = []) => ({
  type: "REPLACE_POSTS",
  payload: posts,
});

export const updatePost = (index, post) => ({
  type: "UPDATE_POST",
  payload: { post, index },
});
