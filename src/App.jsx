import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage"
import SignUpPage from "./Pages/SignupPage/SignupPage";
import HabitsPage from "./Pages/HabitsPage/HabitsPage";
import TodayPage from "./Pages/TodayPage/TodayPage";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import UserDataProvider from "./Context/userData";



export default function App() {

  return (

    <BrowserRouter>

      <UserDataProvider>

        <Routes>

          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/cadastro"} element={<SignUpPage />} />
          <Route path={"/hoje"} element={<TodayPage />} />
          <Route path={"/habitos"} element={<HabitsPage />} />
          <Route path={"/historico"} element={<HistoryPage />} />
          
        </Routes>
      </UserDataProvider>

    </BrowserRouter>
  );
}