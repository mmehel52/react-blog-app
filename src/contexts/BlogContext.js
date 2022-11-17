import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [currentBlog, setCurrentBlog] = useState([]);
  useEffect(() => {
    userObserver(setCurrentBlog);
  }, []);
  return (
    <BlogContext.Provider value={{ currentBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
