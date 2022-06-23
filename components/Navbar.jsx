import A from "./A";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <A href="/" text="home" />

      <A href="/users" text="users" />

      <style jsx>{``}</style>
    </div>
  );
};

export default Navbar;
