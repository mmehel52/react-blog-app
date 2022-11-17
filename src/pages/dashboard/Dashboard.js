import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import DashboardStyled, {
  Blogdiv,
  Bottom,
  Image,
  Index,
} from "./DashboardStyled";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
  // console.log(blogList);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>---DASHBOARD---</h1>
      <DashboardStyled>
        {blogList.map((blog) => (
          <Blogdiv
            key={blog.id}
            onClick={() => navigate("details/" + blog.id, { state: blog })}
          >
            <Image src={blog.url} alt="" />
            <Index>
              <h3>{blog.title.toUpperCase()}</h3>
              <p>{blog.date}</p>
              <p>{blog.content.slice(0, 100)}...</p>
            </Index>
            <Bottom>
              <p>
                <BsPersonCircle style={{ marginRight: "10px" }} />
                {blog.email}
              </p>
              <p>
                <AiFillHeart style={{ marginRight: "10px" }} />
                0
                <BiComment
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
                0
              </p>
            </Bottom>
          </Blogdiv>
        ))}
      </DashboardStyled>
    </div>
  );
};

export default Dashboard;
