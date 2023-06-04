import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ContainerHabits, TitleContainer, HabitCardContainer } from "./styles";
import { UserDataContext } from "../../Context/userData";
import { HABITS_URL } from "../../constants/urls";
import { PageWithLoading } from "../../components/PageWithLoading/PageWithLoading";
import axios from "axios";
import Header from "../../components/Header/Header";
import CreatesNewHabit from "../../components/CreatesNewHabit/CreatesNewHabit";
import BoardHabits from "../../components/BoardHabits/BoardHabits";
import Footer from "../../components/Footer/Footer";

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);
  const [cardVisibility, setCardVisibility] = useState("none");
  const [listUpdate, setListUpdate] = useState(0);
  const { config } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(HABITS_URL, config)
      .then((resp) => {
        setHabits(resp.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        navigate("/");
      });
  }, [config, navigate, cardVisibility, listUpdate]);

  return (
    <ContainerHabits>
      <Header />
      <PageWithLoading isLoading={habits.length === 0}>
      <TitleContainer>
        <h2>Meus Hábitos</h2>
        <button
          data-test="habit-create-btn"
          onClick={() => setCardVisibility("flex")}
        >
          +
        </button>
      </TitleContainer>

      <CreatesNewHabit
        displayMode={cardVisibility}
        setDisplayMode={setCardVisibility}
      />

      {habits.length > 0 ? (
        <HabitCardContainer>
          {habits.map((h, i) => (
            <BoardHabits
              key={i}
              index={h.id}
              name={h.name}
              days={h.days}
              visibility={listUpdate}
              setVisibility={setListUpdate}
            />
          ))}
        </HabitCardContainer>
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}
      </PageWithLoading>
      <Footer />
    </ContainerHabits>
  );
}