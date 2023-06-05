import { ContainerHeader, UserImage } from "./styles";
import { UserDataContext } from "../../Context/userData";
import { useContext } from "react";
import { Link } from "react-router-dom";
import iconUser from "../../assets/iconUser.png";
import TrackIt from "../../assets/TrackIt.png";



export default function Header(){

    const { data } = useContext(UserDataContext);


    return (
        <ContainerHeader data-test="header">
            <Link to = "/">
            <img src={TrackIt} alt=" TrackIt Logo" />
            </Link>
            <UserImage src= { !data ? iconUser : data.image } alt= "User Image"/>
        </ContainerHeader>
    );
}