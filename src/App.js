import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/route";
 
const MainContext = createContext()

function App() {
  const [basket, setBasket] = useState([])
  return (
    <MainContext.Provider value={[basket, setBasket]}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
export {MainContext}