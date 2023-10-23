import wxicon from "../../assets/wx-icon.png";
import qqicon from "../../assets/qq-icon.png";

import "./style.scss";
const UseUserLogin = (props) =>{
    const { setShow, login } = props;
    return <div className="user-login">
       <h3 className="title">账号登录</h3>
       <input type="text"  placeholder="用户名/手机号" className="user-input"/>
       <input type="text" placeholder="密码" className="user-input"/>

       <div className="flex-center-user">
            <input type="text" placeholder="请输入验证码" className="user-code"/>
            <button type="button" className="user-code-btn">验证码</button>
       </div>

        <div className="flex1">
            <button type="button" className="login-btn" onClick={() => login()}>登录</button>
            <button type="button" className="login-btn" onClick={() => setShow(false)}>注册</button>
        </div>

        <div className="flex3">
            <div className="flex2">
                <img src={wxicon} alt="" className="wx-icon"/>
                <p>微信登录</p>
            </div>

            <div className="flex2">
                <img src={qqicon} alt="" className="wx-icon"/>
                <p>QQ登录</p>
            </div>
        </div>

        <div className="flex-center">
            <input type="checkbox" />
            <p style={{fontSize:"14px"}}>阅读并接受《服务条框》和《隐私政策》</p>
        </div>
        

    </div>
}

export default UseUserLogin;