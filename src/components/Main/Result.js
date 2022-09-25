import { useSoal } from "../../Context/SoalContext";
import classes from "./Result.module.css";

const Result = (props) => {
  const { answered, score } = useSoal();

  return (
    <div className={classes.result}>
      <h2>Your Quiz Result!</h2>
      <p>Total Answered: {answered}</p>
      <p>Correct Answer: {score}</p>
      <p>Wrong Answer: {answered - score}</p>
      <button onClick={() => window.location.reload()}>Retry?</button>
    </div>
  );
};

export default Result;
