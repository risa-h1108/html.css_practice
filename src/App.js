import { Header } from "./pages/Header.js";
import { posts } from "./data/posts.js";

export const App = () => {
  return (
    <>
      <Header />
      <Header />
      <body>
        <div className="post">
          <div className="info">
            <p className="date">2023-09-11</p>
            <ul className="categories">
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <h2>APIで取得した記事タイトル１</h2>
          <p className="content">
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
          </p>
        </div>

        <div className="post">
          <div className="info">
            <p className="date">2023-09-10</p>
            <ul className="categories">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <h2>APIで取得した記事タイトル２</h2>
          <p className="content">
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
          </p>
        </div>

        <div className="post">
          <div className="info">
            <p className="date">2023-09-09</p>
            <ul className="categories">
              <li>JavaScript</li>
            </ul>
          </div>
          <h2>APIで取得した記事タイトル３</h2>
          <p className="content">
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
            本文です。本文です。本文です。本文です。本文です。本文です。
            <br />
          </p>
        </div>
      </body>
    </>
  );
};

export default App;
