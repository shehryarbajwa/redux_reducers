import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => {
  //This can be done as long as we are not using return for fetchPosts to have async access
  return async dispatch => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
