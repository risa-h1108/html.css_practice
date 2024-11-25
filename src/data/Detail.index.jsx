import React from "react";
import { useParams } from "react-router-dom"; //[useParams]という関数を利用することで、パラメータを取得することが可能になる。
import { posts } from "./posts";
import classes from "../styles/Detail.module.css";

export const Detail = () => {
  console.log(classes);
  const { id } = useParams(); // urlからidを取得。http://localhost:3000/posts/1 というURLだったら、1を取得
  const post = posts.find((post) => post.id === Number(id)); // findメソッドを用いて、posts配列の中から、postのidが、上記で取得したid(7行目のid)と一致するpostオブジェクトを探す。なければundefinedがpostに格納される。
  if (!post)
    return (
      <div className={classes.postError}>記事が見つかりませんでした。</div>
    ); // もし上記のfindメソッドでpostにundefinedが入ったら、!post(!は論理否定)がtrueとなり、「記事が見つかりませんでした」という表示をさせる

  return (
    <div className={classes.wrapper}>
      <img src={post.thumbnailUrl} alt="sampleImage" />
      <div className={classes.info}>
        <div className={classes.date}>
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <ul className={classes.categories}>
          {post.categories.map((category, id) => (
            <li key={id}>{category}</li>
          ))}
        </ul>
      </div>
      <h2>{post.title}</h2>
      <p
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};
