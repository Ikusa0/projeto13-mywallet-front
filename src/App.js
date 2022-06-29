import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./Contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<button>yay</button>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
