import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserProvider from "./Contexts/UserContext";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing_up" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
