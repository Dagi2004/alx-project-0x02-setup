import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-500 w-full p-3 flex  justify-center items-center">
      <ul className="flex flex-row space-x-4 gap-4 text-white">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
