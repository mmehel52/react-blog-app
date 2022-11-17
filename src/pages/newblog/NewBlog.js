import React, { useState } from "react";
import firebase from "../../helpers/firebase";
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
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../../helpers/toastNotify";
import NewStyled, { Btn, Input, Input2, Signin } from "./NewStyled";
import Pic from "../../assets/mm.png";

const NewBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(firebase);
    console.log(db);
    const userRef = ref(db, "blog");
    set(push(userRef), blog);
    toastSuccessNotify("Blog was added successfully!");
    setBlog({ title: "", url: "", content: "" });
  };
  return (
    <NewStyled>
      <Signin>
        <img src={Pic} width="100" />
        <h1>--New Blog--</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title*"
            required
            onChange={handleChange}
            // value={blog.title}
          />
          <br />
          <Input
            type="text"
            name="url"
            placeholder="image URL*"
            required
            onChange={handleChange}
            // value={blog.url}
          />
          <br />
          <Input2
            type="text"
            name="content"
            placeholder="Content*"
            required
            onChange={handleChange}
            // value={blog.content}
          />
          <br />
          <Btn>Submit</Btn>
          <br />
          <br />
        </form>
      </Signin>
    </NewStyled>
  );
};

export default NewBlog;
