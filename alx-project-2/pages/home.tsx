import React, { useState } from "react";
import PostModal from "../components/common/PostModal";
import Header from "@/components/layout/Header";

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // State to store the list of posts
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to handle adding a new post
  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]); // Add the new post to the list
  };

  return (
    <div className="mb-5 p-8 mx-auto">
      <Header />
      <h1 className="text-3xl font-bold mb-6 mt-3 ">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)} // Open the modal
        className="px-6 mt-2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Add New Post
      </button>

      {/* Render the PostModal */}
      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)} // Close the modal
          onSumbit={handleAddPost} // Handle the form submission
        />
      )}

      {/* Display the list of posts */}

      <div className="mt-8">
        {posts.length === 0 ? (
          <p className="text-gray-600">
            No posts yet. Click "Add New Post" to create one.
          </p>
        ) : (
          <ul className="flex flex-col  md:flex-row  gap-5 space-x-8">
            {posts.map((post, index) => (
              <li
                key={index}
                className="max-w-[600px] px-10 p-5  border border-gray-300 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-700">{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
