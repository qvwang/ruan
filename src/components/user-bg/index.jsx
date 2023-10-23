import "./style.css";

// 背景图
const UseBg = (props) => {
  const { title, imgSrc } = props;
  return (
    <div className="user-bg flex-center-column">
      <h1 className="title">{title}</h1>
      <img src={imgSrc} alt="" className="login-img"/>
    </div>
  );
};

export default UseBg;
