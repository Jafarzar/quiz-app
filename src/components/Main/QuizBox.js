import { useSoal } from "../../Context/SoalContext";

import classes from "./QuizBox.module.css";

const QuizBox = (props) => {
  const dataSoal = useSoal();
  const soal = dataSoal.quizDatas?.find((item) => item.id === dataSoal.nomor);

  return (
    <section className={classes.box}>
      <h2>Question {soal?.id}</h2>
      <p>{soal?.question}</p>
    </section>
  );
};

export default QuizBox;
