/* eslint-disable no-undef */
import { createContext } from "react";

// 1) CREATE NEW CONTEXT
const PostContext = createContext();

const PostProvider = ({ children }) => {
  return (
    <PostContext.Provider value={{ value }}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
