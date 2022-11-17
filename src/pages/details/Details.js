import React from "react";
import DetailStyled, { Blogdiv, Bottom, Image, Index } from "./DetailStyled";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
const { state: detail } = useLocation();
const Details = () => {
  return (
    <div>
      <h1>---DASHBOARD---</h1>
      <Blogdiv
        key={blog.id}
        onClick={() => navigate("details/" + blog.id, { state: blog })}
      >
        <Image src={blog.url} alt="" />
        <Index>
          <h3>{blog.title.toUpperCase()}</h3>
          <p>{blog.content}</p>
        </Index>
        <Bottom>
          <p>
            <BsPersonCircle style={{ marginRight: "10px" }} />
            {currentUser?.email}
          </p>
          <p>
            <AiFillHeart style={{ marginRight: "10px" }} />
            0
            <BiComment style={{ marginLeft: "10px", marginRight: "10px" }} />0
          </p>
        </Bottom>
      </Blogdiv>
    </div>
  );
};

export default Details;
