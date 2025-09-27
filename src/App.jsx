import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login"
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div className=" w-full h-dvh bg-gradient-to-b from-[#04091B] to-[#091540]  text-white">
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index  element={<Login/>} />
            <Route path="Home" element={<h1>Home Page</h1>} />
            <Route path="register" element={<h1>Register Page</h1>} />
          </Route>
          <Route path="*" element={<h1>Page Not Found | Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}