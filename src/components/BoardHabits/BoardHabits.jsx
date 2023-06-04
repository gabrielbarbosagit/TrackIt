import { useContext } from "react";
import { UserDataContext } from "../../Context/userData";
import { HABITS_URL } from "../../constants/urls";
import axios from "axios";
import { BoardContainer, DayWeekContainer, Days } from "./styles.js";
import dump from "../../assets/dump.png";

export default function BoardHabits({
  name,
  days,
  index,
  visibility,
  setVisibility,
}) {
  const { config } = useContext(UserDataContext);
  const daysWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  function deleteHabits() {
    if (window.confirm("Deseja realmente apagar o hábito?") === true) {
      axios
        .delete(`${HABITS_URL}/${index}`, config)
        .then(() => {
          setVisibility((visibility += 1));
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  }

  return (
    <BoardContainer data-test="habit-container">
      <img
        data-test="habit-delete-btn"
        onClick={deleteHabits}
        src={dump}
        alt="Imagem Lixeira"
      />

      <h2 data-test="habit-name">{name}</h2>

      <DayWeekContainer>
        {daysWeek.map((day, i) => (
          <Days data-test="habit-day" key={i} index={i} days={days}>
            {day}
          </Days>
        ))}
      </DayWeekContainer>
    </BoardContainer>
  );
}