import axios from "axios";
import { useContext } from "react";
import { HABITS_URL } from "../../constants/urls";
import { UserDataContext } from "../../Context/userData";
import iconCheck from "../../assets/iconCheck.png";
import { ContainerBoard, Container, SequenceCurrent, SequenceHighest } from "./styles";


export default function BoardToday({

    id, name, checked, visibilityStatus, setVisibilityStatus, currentSequence, highestSequence

}) {


    const { config } = useContext(UserDataContext);


    function todayHabitcheck() {


        const URL = checked
            ? `${HABITS_URL}/${id}/uncheck`
            : `${HABITS_URL}/${id}/check`;


        axios

            .post(URL, null, config)
            .then(() => {
                setVisibilityStatus(visibilityStatus + 1)

            })

            .catch((error) => {
                alert(error.data.response.message)
            });
    }




    return (

        <ContainerBoard data-test="today-habit-container" visibilityStatus={checked} >

            <Container>

                <p data-test="today-habit-name"> {name} </p>

                <SequenceCurrent data-test="today-habit-sequence" status={checked}>


                    <p> Sequência Atual: {" "}

                        <span>

                            {currentSequence} {currentSequence > 1 ? "dias" : "dia"}

                        </span>
                    </p>
                </SequenceCurrent>

                <SequenceHighest

                    data-test="today-habit-record" status={checked} currentSequence={currentSequence} highestSequence={highestSequence} >

                    <p> Seu Recorde: {" "}
                        <span>
                            {highestSequence} {highestSequence > 1 ? "dias" : "dia"}
                        </span>
                    </p>
                </SequenceHighest>
            </Container>

            <button data-test="today-habit-check-btn" onClick={todayCheck}>
                <img src={iconCheck} alt="Imagem de Check" />
            </button>
        </ContainerBoard>
    );
}



