import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => {

    const response = await jsonplaceholder.get('/posts');

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
