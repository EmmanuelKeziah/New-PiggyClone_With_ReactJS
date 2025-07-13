import React from "react";
import Sponsors from "../static/Sponsors";
import StoriesHero from "../components/block/stories/StoriesHero";
import StoriesImg from "../components/block/stories/StoriesImg";

const Stories = () => {
  return (
    <div>
      <StoriesHero />
      <StoriesImg />
      <Sponsors />
    </div>
  );
};

export default Stories;
