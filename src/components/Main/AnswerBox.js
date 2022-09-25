import { useSoal } from "../../Context/SoalContext";

import classes from "./AnswerBox.module.css";

const AnswerBox = (props) => {
  const ctxSoal = useSoal();
  const jawab = ctxSoal.quizDatas?.find((item) => item.id === ctxSoal.nomor);

  return (
    <section className={classes.box}>
      <h2>Choose your answer</h2>
      <div className={classes.answer}>
        {jawab?.answers.map((answer) => (
          <button
            key={answer}
            onClick={() => {
              if (answer === jawab?.correct) {
                ctxSoal.setScore((prevScore) => prevScore + 1);
              }
              ctxSoal.setAnswered((prevAnswered) => prevAnswered + 1);
              ctxSoal.gantiNomor((prevNomor) => prevNomor + 1);
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AnswerBox;
