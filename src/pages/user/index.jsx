import bg_login from "@/assets/login-bg.png";
import bg_regin from "@/assets/regin-bg.png";
import UseBg from "@/components/user-bg";
import UseUserLogin from "@/components/user-login";
import UseUserReg from "@/components/user-regin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "../../index.css";
import "./style.scss";

const UseLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const login = () =>{
    navigate("/");
  };

  return (
    <div className="user-bg-ss">
      <div className="user-main">
        <UseBg title={show ? "欢迎使用meow" : "欢迎注册meow"} imgSrc={show ? bg_login : bg_regin}></UseBg>
        {
          show ?  <UseUserLogin setShow={setShow} login={login}></UseUserLogin> :  <UseUserReg setShow={setShow}></UseUserReg>
        }
      </div>
    </div>
  );
};

export default UseLogin;
