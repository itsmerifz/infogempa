import { useEffect, useState, Suspense, lazy } from "react";
import { getData } from "./data";
import Header from "./components/Header";
import Footer from "./Footer";
// import Content from './components/Content'

const Content = lazy(() => import("./components/Content"));

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getData().then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div className="">
      <Header />
      {/* <img  alt="" /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Content data={data} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
