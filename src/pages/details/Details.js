import React, { useContext } from "react";
import Blogdiv, { Bottom, Btn, BtnDiv, Image, Index } from "./DetailStyled";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch, DeleteUser } from "../../contexts/BlogContext";
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
  const navigate = useNavigate();
  const { state: detail } = useLocation();
  const { currentUser } = useContext(AuthContext);
  const { blogList } = useFetch();
  // console.log(detail.id);
  const aaa = blogList.filter((blog, id) => blog.id == detail.id);
  const det = aaa[0];
  const Delete = (a) => {
    DeleteUser(a);
    navigate("/");
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1 style={{ textAlign: "center" }}>---DETAİLS---</h1>
      <Blogdiv key={det?.id}>
        <Image src={det?.url} alt="" />

        <Index>
          <h3>{det?.title?.toUpperCase()}</h3>
          <p>{det?.date}</p>
          <p>{det?.content}</p>
        </Index>
        <Bottom>
          <p>
            <BsPersonCircle style={{ marginRight: "10px" }} />
            {det?.email}
          </p>
          <p>
            <AiFillHeart style={{ marginRight: "10px", color: "red" }} />
            0
            <BiComment style={{ marginLeft: "10px", marginRight: "10px" }} />0
          </p>
        </Bottom>
      </Blogdiv>
      {currentUser?.email === det?.email && (
        <BtnDiv>
          <Btn
            onClick={() => navigate("/update/" + det?.id, { state: det })}
            style={{ backgroundColor: "#747A8C" }}
          >
            UPDATE
          </Btn>
          <Btn onClick={() => Delete(det?.id)}>DELETE</Btn>
        </BtnDiv>
      )}
    </div>
  );
};

export default Details;
