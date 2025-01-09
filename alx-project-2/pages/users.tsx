import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-3">
        {posts
          .slice(0, 6)
          ?.map(
            (
              { id, name, username, phone, website }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                phone={phone}
                website={website}
                id={id}
                key={key}
              />
            )
          )}
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
export default Users;
