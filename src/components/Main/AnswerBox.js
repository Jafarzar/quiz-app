import { useSoal } from "../../Context/SoalContext";

import classes from "./AnswerBox.module.css";

const AnswerBox = (props) => {
  const dataJawab = useSoal();
  const jawab = dataJawab.quizDatas?.find(
    (item) => item.id === dataJawab.nomor
  );

  return (
    <section className={classes.box}>
      <h2>Choose your answer</h2>
      <div className={classes.answer}>
        {jawab?.answers.map((answer) => (
          <button
            key={answer}
            onClick={() => {
              if (answer === jawab?.correct) {
                dataJawab.setScore((prevScore) => prevScore + 1);
              }
              dataJawab.setAnswered((prevAnswered) => prevAnswered + 1);
              dataJawab.gantiNomor((prevNomor) => prevNomor + 1);
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
