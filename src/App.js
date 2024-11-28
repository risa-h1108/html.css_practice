import { Header } from "./pages/Header.js";
import { Home } from "./components/Home.jsx";
import { Detail } from "./components/Detail.jsx";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />

      {/*element属性は、そのパスがマッチしたときに表示するコンポーネントを指定する。*/}
      {/* path="/posts/:id"は、`/posts/1`や`/posts/abc`のように、`/posts/の後に任意の文字列が続くパスを意味する。
        　　ここで:id`はパラメータとして扱われ、その部分にどんな文字列が来てもマッチする */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/post/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
