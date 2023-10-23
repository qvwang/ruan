import { useState } from "react";
import search_icon from "../../assets/serach-icon.png";
import im_tools_icon from "../../assets/im-tools-list.png";
import im_input_icon from "../../assets/im-input-icon.png";
import "./style.scss";

const UseIm = () => {
  const [list, setList] = useState([]);
  const [msg, setMsg] = useState("");

  const sendBtn = () =>{
    let params = {
      id: 1,
      name: "zds",
      msg: msg
    }
  
    // 创建新的列表并添加新的消息
    let newList = [...list, params];
    // 使用 setList 更新状态
    setList(newList);

    setMsg("");

    console.log("1")
  };


  return (
    <div className="im">
      {/* 工具 */}
      <div className="im-tools">
        <div className="im-header"></div>
        <ul className="im-icon">
          <li>
            <img src={im_tools_icon} alt="" />
          </li>
        </ul>
      </div>

      {/* 搜索 */}
      <div className="im-user">
        <div className="search-box">
          <div className="search-ps">
            <input type="text" placeholder="搜索" className="search-input"/>
            <img src={search_icon} alt="" className="search-icon"/>
          </div>
        </div>

        <div className="im-list">
          <div className="user-img"></div>
          <div className="im-info">
            <p className="im-name">群聊名</p>
            <p className="im-pip">最近一条消息</p>
          </div>
        </div>
      </div>
     

      {/* im chat */}
      <div className="chat-box">
        <div className="chat-header">
          <p>群聊名</p>
        </div>
        <div className="chat-main">

          {
            list.map((item, index) =>{
              return <div className="chat-list-main" style={{ marginLeft: "auto" }} key={index}>
                  <div className="my-main">
                    <p>{item.msg}</p>
                  </div>
                  <div className="my-header"></div>
                </div>
            })
          }


        </div>
        <div className="chat-input-box">
          <div className="chat-input-tools">
            <img src={im_input_icon} alt="" />
          </div>
          <textarea className="chat-user-input" value={msg} onChange={(v) => setMsg(v.target.value)}></textarea>
          <button type="button" className="chat-send" onClick={() => sendBtn()}>发送</button>
        </div>
      </div>

    </div>
  );
};

export default UseIm;
