import MainContainer from "../../containers/MainContainer";
const user = ({ user }) => {
  return (
    <MainContainer keywords={user.name}>
      <div>
        пользователь с id {user.id} name {user.name}
      </div>
    </MainContainer>
  );
};

export default user;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
