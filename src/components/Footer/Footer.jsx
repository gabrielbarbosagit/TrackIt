import { ContainerFooter, CustomCircularProgress } from './styles';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useContext } from 'react';
import { UserDataContext } from '../../Context/userData';
import { White, Blue } from "../../constants/colors";



export default function Footer() {


    const { percentage } = useContext(UserDataContext);


    return (

        <ContainerFooter data-test="menu">

            <Link to={"/habitos"} data-test="habit-link">
                <h3> Hábitos </h3>
            </Link>

            <CustomCircularProgress>
                <Link to={"/hoje"} data-test="today-link">
                    <h4> Hoje </h4>
                </Link>

                <CircularProgressbar
                value={percentage}
                background
                backgroundPadding={5}
                styles={buildStyles({strokeLinecap: 'round', textSize: '18px', pathColor: White, textColor: White, trailColor: 'transparent', backgroundColor:Blue})}
                />
            </CustomCircularProgress>

            <Link to={"/historico"} data-test="history-link">
                <h3> Histórico </h3>
            </Link>
        </ContainerFooter>
    );
}