import { ContainerSignUp, Logo } from "./styles";
import { Link } from "react-router-dom";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import logo from "../../assets/logo.png";

export default function SignUpPage() {
  return (
    <ContainerSignUp>
      <Logo src={logo} alt="Logo TrackIt" />
      <FormSignUp />
      <Link to="/" data-test="login-link">
        <p> Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerSignUp>
  );
}