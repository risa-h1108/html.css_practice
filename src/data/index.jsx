import React from "react";
import { posts } from "./posts";
import classes from "../styles/Home.module.css";

export const Data = () => {
  return posts.map((post) => (
    <div key={post.id} className={classes.post}>
      <div className={classes.info}>
        <p className={classes.date}>
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <ul className={classes.categories}>
          {post.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <h2>{post.title}</h2>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  ));
};
