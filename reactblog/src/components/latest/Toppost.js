import React from "react";
import Latestpost from "./Latestpost";
import { imageDataFirst } from "../../data/topPost";
import imageDataSecond from "../../data/topPost";
const Toppost = () => {
  return (
    <>
      <div className="latArticlesGridRight2">
        <h2 className="topPost">
          <span>Top</span> Posts
        </h2>
        <div className="postRight">
          <img src={imageDataFirst.imgUrl} alt="sky" className="skyImage" />
          <div className="titleRight">
            <h2 className="articleTitle">{imageDataFirst.title}</h2>
            <h1 className="RightOne">{imageDataFirst.number}</h1>
          </div>
          <p className="articleParaBottom">
            {imageDataFirst.paraBottomFirst}{" "}
            <span>{imageDataFirst.paraBottomSecond}</span>
          </p>
        </div>
        <div className="rightArticleTpost">
          {imageDataSecond.map((item, index) => {
            return (
              <Latestpost
                imgUrl={item.imgUrl}
                number={item.number}
                title={item.title}
                paraBottomFirst={item.paraBottomFirst}
                paraBottomSecond={item.paraBottomSecond}
                key={index}
              ></Latestpost>
            );
          })}

          {/* <Latestpost number="3"></Latestpost>
          <Latestpost number="4"></Latestpost> */}
        </div>
      </div>
    </>
  );
};

export default Toppost;
