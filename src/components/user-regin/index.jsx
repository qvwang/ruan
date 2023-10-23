

import "./style.scss";
const UseUserForm = (props) =>{
    const { setShow } = props;

    return <div className="user-regin">
       <h3 className="title">账号注册</h3>
       <input type="text"  placeholder="用户名/手机号" className="user-input"/>
       <input type="text" placeholder="密码" className="user-input"/>
       <input type="text" placeholder="确认密码" className="user-input"/>


        <div className="flex1">
            <button type="button" className="login-btn" onClick={() => setShow(true)}>注册</button>
        </div>

        <div className="flex-center">
            <input type="checkbox" />
            <p style={{fontSize:"14px"}}>阅读并接受《服务条框》和《隐私政策》</p>
        </div>
        

    </div>
}

export default UseUserForm;