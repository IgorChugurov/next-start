import Image from "next/image";
import styles from "../styles/Home.module.css";

import MainContainer from "../containers/MainContainer";

export default function Home() {
  return (
    <MainContainer keywords={"main page"}>
      {" "}
      <h1>main pages</h1>
    </MainContainer>
  );
}
