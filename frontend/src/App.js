import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/products`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const resData = await res.json();
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;

