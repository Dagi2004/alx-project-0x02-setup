import React from "react";
import Button from "@/components/common/Button";
const About: React.FC = () => {
  return (
    <div>
      <h1>This About Section</h1>
      <div className="flex justify-center items-center space-x-5">
        <Button size="small" shape="rounded-sm">
          Small Rounded
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded
        </Button>
      </div>
    </div>
  );
};

export default About;
