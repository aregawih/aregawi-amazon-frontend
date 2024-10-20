import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryInfos } from "./categoryFullInfo";
import classes from "./category.module.css"

function Category() {
  return (
    <div className={classes.category__container}>
      {categoryInfos.map((infos, i) => {
        return <CategoryCard data={infos} key={i} />;
      })}
    </div>
  );
}

export default Category;
