import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserProvider from "./Contexts/UserContext";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import NewRegistryProfit from "./Pages/NewRegistryProfit";
import NewRegistrySpent from "./Pages/NewRegistrySpent";
import Receipt from "./Pages/Receipt";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing_up" element={<SingUp />} />
          <Route path="/profit" element={<NewRegistryProfit />} />
          <Route path="/spent" element={<NewRegistrySpent />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
