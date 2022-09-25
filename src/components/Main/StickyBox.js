import Countdown from "react-countdown";
import { useSoal } from "../../Context/SoalContext";
import { useAuth } from "../../Store/AuthContext";
import classes from "./StickyBox.module.css";

const StickyBox = (props) => {
  const { userName } = useAuth();
  const ctxSoal = useSoal();
  const curSoal = ctxSoal.nomor;
  const totalSoal = ctxSoal.quizDatas?.length;
  const Timer = () => {
    return (
      <Countdown
        onComplete={() => {
          ctxSoal.gantiNomor(totalSoal + 1);
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
      <h4>Good Luck {userName}!</h4>
      <h4>
        {curSoal} / {totalSoal}
      </h4>
      <Timer />
    </div>
  );
};

export default StickyBox;
