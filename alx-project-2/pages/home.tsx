import React from "react";
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";

const Home: React.FC<CardProps> = ({
  title = "My Title",
  content = "My Content",
}) => {
  return (
    <div>
      <h1>This is Home Section</h1>
      <Card title={title} content={content} />
    </div>
  );
};

export default Home;
