import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Post: React.FC<PostProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-3">
        {posts
          .slice(0, 6)
          ?.map(({ id, title, body, userid }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userid={userid}
              id={id}
              key={key}
            />
          ))}
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
export default Post;
