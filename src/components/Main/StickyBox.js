import Countdown from "react-countdown";
import { useSoal } from "../../Context/SoalContext";
import classes from "./StickyBox.module.css";

const StickyBox = (props) => {
  const ctxSoal = useSoal();
  const curSoal = ctxSoal.nomor;
  const totalSoal = ctxSoal.quizDatas?.length;
  const Timer = () => {
    return (
      <Countdown
        onComplete={() => {
          ctxSoal.gantiNomor(11);
        }}
        date={ctxSoal.timeOver}
        renderer={({ minutes, seconds }) => {
          return (
            <span>
              {minutes}:{seconds}
            </span>
          );
        }}
      />
    );
  };

  return (
    <div className={classes.sticky}>
      <h4>
        {curSoal} / {totalSoal}
      </h4>
      <Timer />
    </div>
  );
};

export default StickyBox;
