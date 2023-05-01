import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [status, setStatus] = React.useState(false);
  function handleClick() {
    setStatus((prev) => !prev);
  }

  return (
    <article className="question">
      <header>
        <h5>{props.data.title}</h5>
        <button className="click-btn" onClick={handleClick}>
          {status ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p style={{ display: status ? "block" : "none" }}>{props.data.info}</p>
    </article>
  );
};

export default Question;
