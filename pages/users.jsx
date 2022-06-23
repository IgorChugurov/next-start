import A from "../components/A";
import styles from "../styles/user.module.scss";

import MainContainer from "../containers/MainContainer";
const users = ({ users }) => {
  return (
    <MainContainer keywords={"users list"}>
      <div className={styles.users}>
        <h1>User list</h1>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <A href={`/users/${user.id}`} text={user.name} />
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};

export default users;

export async function getStaticProps(context) {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   const users = response.data;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
