import logo from "../../assets/side/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_main}>
      <img src={logo} alt="logo" className={styles.logo_image} />
    </div>
  );
};

export default Logo;
