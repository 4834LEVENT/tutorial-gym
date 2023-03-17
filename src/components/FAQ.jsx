import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isAnswerShow, setIsAnswerShow] = useState(false);
  return (
    <div>
      <article className="faq" onClick={() => setIsAnswerShow(!isAnswerShow)}>
        <div>
          <h4>{question}</h4>
          <button
            className="faq-icon"
            onClick={() => setIsAnswerShow(!isAnswerShow)}
          >
            {isAnswerShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {isAnswerShow && <p>{answer}</p>}
      </article>
    </div>
  );
};

export default FAQ;
