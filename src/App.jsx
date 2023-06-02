import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage"
import SignUpPage from "./Pages/SignupPage/SignupPage";
import HabitsPage from "./Pages/HabitsPage/HabitsPage";
import UserDataProvider from "./Context/userData";



export default function App() {

  return (

    <BrowserRouter>

      <UserDataProvider>

        <Routes>

          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/cadastro"} element={<SignUpPage />} />
          <Route path={"/habitos"} element={<HabitsPage />} />
          
        </Routes>
      </UserDataProvider>

    </BrowserRouter>
  );
}