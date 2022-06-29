import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserProvider from "./Contexts/UserContext";
import Login from "./Pages/Login";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
