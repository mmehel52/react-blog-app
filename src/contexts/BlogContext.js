import React, { useState, useEffect, useContext } from "react";
import firebase from "../helpers/firebase";
import {
  getDatabase,
  onValue,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { toastWarnNotify } from "../helpers/toastNotify";

export const AddUser = (blog) => {
  const db = getDatabase(firebase);
  console.log(db);
  const userRef = ref(db, "blog");
  set(push(userRef), blog);
};

export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "blog");
    onValue(query(userRef), (snapshot) => {
      const blogs = snapshot.val();
      const blogArray = [];
      for (let id in blogs) {
        // console.log(blogs[id]);
        blogArray.push({ id, ...blogs[id] });
      }

      setBlogList(blogArray);
    });
  }, []);
  return { blogList };
};
export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  // const userRef=ref(db,"user/")
  remove(ref(db, "blog/" + id));
  toastWarnNotify("Blog Deleted");
};

export const UpdateUser = (det) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "blog/" + det.id);

  const updates = {
    title: det.title,
    url: det.url,
    content: det.content,
  };

  updates["blog/" + det.id] = det;

  return update(ref(db), updates);
};
