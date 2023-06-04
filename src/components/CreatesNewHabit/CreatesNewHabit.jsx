import { useState } from "react";
import {
  ContainerHabitCreation,
  Input,
  DaysWeek,
  ButtonDay,
  ContainerButtons,
} from "./styles";
import ButtonCard from "../ButtonCard/ButtonCard";

export default function CreateNewHabit({ displayMode, setDisplayMode }) {
  const daysWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [nameHabit, setNameHabit] = useState("");
  const [daySelected, setDaySelected] = useState([]);
  const [modeDisable, setModeDisable] = useState(false);

  function selectedDay(index) {
    const newDaySelected = daySelected.includes(index)
      ? daySelected.filter((day) => day !== index)
      : [...daySelected, index];

    setDaySelected(newDaySelected);
  }

  const body = {
    name: nameHabit,
    days: daySelected,
  };

  return (
    <ContainerHabitCreation
      data-test="habit-create-container"
      displayMode={displayMode}
    >
      <Input
        data-test="habit-name-input"
        placeholder="Nome do hábito"
        disabled={modeDisable}
        value={nameHabit}
        onChange={(e) => setNameHabit(e.target.value)}
      />
      <DaysWeek>
        {daysWeek.map((day, i) => {
          return (
            <ButtonDay
              data-test="habit-day"
              key={i}
              index={i}
              disabled={modeDisable}
              onClick={() => selectedDay(i)}
              selected={daySelected.includes(i)}
            >
              {day}
            </ButtonDay>
          );
        })}
      </DaysWeek>

      <ContainerButtons>
        <ButtonCard
          content={"Cancelar"}
          modeDisable={modeDisable}
          setModeDisable={setModeDisable}
          setDisplayMode={setDisplayMode}
          hover="#dbdbdb"
          color="#52B6FF"
        />
        <ButtonCard
          content={"Salvar"}
          modeDisable={modeDisable}
          setModeDisable={setModeDisable}
          setDaySelected={setDaySelected}
          setNameHabit={setNameHabit}
          body={body}
          setDisplayMode={setDisplayMode}
          hover="#29a5ff"
          background="#52B6FF"
          color="#ffffff"
          
          
        />
      </ContainerButtons>
    </ContainerHabitCreation>
  );
}