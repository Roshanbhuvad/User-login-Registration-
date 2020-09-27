import React from "react";

import data from "./data";
import Category from "./Category";

export default function Categorytile() {
  return (
    <>
      {data.map((item, index) => {
        return <Category post={item} key={item.id} />;
      })}
    </>
  );
}
