import { useAuth } from "../../Store/AuthContext";
import classes from "./Logout.module.css";

const Logout = (props) => {
  const { onLogout } = useAuth();

  return (
    <div className={classes.logout}>
      <button onClick={onLogout}>LOGOUT</button>
    </div>
  );
};

export default Logout;
