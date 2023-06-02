import { useState } from "react";
import { Form } from "./styles";
import { AUTH_LOGIN_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { White } from "../../Constants/colors";
import axios from "axios";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setDisable(true);

    const body = { email, password };
    console.log("Dados enviados para a API:", body);

    axios
      .post(AUTH_LOGIN_URL, body)
      .then((resp) => {
        setDisable(false);
        const dataString = JSON.stringify(resp.data);
        localStorage.setItem("userDataString", dataString);
        navigate("/habitos");
        window.location.reload()
      })
      .catch((error) => {
        alert(error.response.data.message);
        setDisable(false);
        setEmail("");
        setPassword("");
      });
  }

  return (
    <Form onSubmit={login}>
      <input
        data-test="email-input"
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disable}
        required
      />
      <input
        data-test="password-input"
        placeholder="senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={disable}
        required
      />
      <button data-test="login-btn" type="submit" disabled={disable}>
        {disable ? <ThreeDots color={White} /> : "Entrar"}
      </button>
    </Form>
  );
}