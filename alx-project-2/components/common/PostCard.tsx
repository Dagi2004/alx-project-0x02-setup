import { PostProps } from "@/interfaces";
const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl w-full mx-auto my-6 p-6 bg-blue-500  border border-blue-400  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mt-4 leading-8 mb-4 ">
        <h2 className="text-white ">title:{title}</h2>
      </div>
      <div className=" text-white mb-4 ">
        <p className="text-sm  leading-8">Body:{body}</p>
      </div>

      <div className="flex justify-around items-center mt-4">
        <span>UserID:{userId}</span>
        <span>ID:{id}</span>
      </div>
    </div>
  );
};
export default PostCard;
