import { Header } from "./pages/Header.js";
import { posts } from "./data/posts.js";
import { Data } from "./data/index.jsx";

export const App = () => {
  return (
    <>
      <Header />

      <body>
        <Data />
      </body>
    </>
  );
};

export default App;
