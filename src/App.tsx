import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeIndex from "./pages/Home/HomeIndex";
import KanBan from "./pages/KanBan/KanBan";
import Table from "./pages/Table/Table";
import Wallet from "./pages/Wallet/Wallet";
import Calender from "./pages/Calender/Calender";
import Chat from "./pages/Chat/Chat";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/kanban" element={<KanBan />} />
          <Route path="/table" element={<Table />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
