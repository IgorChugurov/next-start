import A from "./A";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <A href="/" text="Home" />

      <A href="/users" text="Users" />

      <style jsx>{``}</style>
    </div>
  );
};

export default Navbar;
