import { ContainerToday, Title, ListToday } from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserDataContext } from '../../Context/userData';
import { HABITS_URL } from '../../constants/urls';
import { PageWithLoading } from '../../components/PageWithLoading/PageWithLoading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BoardToday from '../../components/BoardToday/BoardToday';
import axios from 'axios';
import dayjs from 'dayjs';



export default function TodayPage() {
    const [todayHabitList, setTodayHabitList] = useState([]);
    const [visibilityStatus, setVisibilityStatus] = useState(0);
    const [taggedlist, setTaggedlist] = useState([]);
    const navigate = useNavigate();
    const { percentage, calculatePercentage, config } =
      useContext(UserDataContext);
  
    const daysOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const today = dayjs();
    const dayOfWeek = daysOfWeek[today.day()];
    const day = `${dayOfWeek}, ${today.format("DD/MM")}`;
  
    useEffect(() => {
      axios
        .get(`${HABITS_URL}/today`, config)
        .then((resp) => {
          setTodayHabitList(resp.data);
          calculatePercentage(resp.data);
          setTaggedlist(resp.data.filter((h) => h.done));
        })
        .catch((error) => {
          if (error.response.data.message === "Campo Header inválido!") {
            alert("Sessão expirada!");
            navigate("/");
          }
        });
    }, [config, navigate, visibilityStatus, calculatePercentage]);
  
    return (
      <>
        <Header />
        <PageWithLoading isLoading={todayHabitList.length === 0}>
          <ContainerToday>
            <Title taggedlist={taggedlist}>
              <h1 data-test="today">{day}</h1>
              {todayHabitList.length === 0 ? (
                <p data-test="today-counter">
                  Nenhum hábito concluído ainda
                </p>
              ) : (
                <p data-test="today-counter">
                  {taggedlist.length === 0
                    ? "Nenhum hábito concluído ainda"
                    : `${percentage}% dos hábitos concluídos`}
                </p>
              )}
            </Title>
            <ListToday>
              {todayHabitList.map((h, i) => (
                <BoardToday
                  id={h.id}
                  key={i}
                  name={h.name}
                  checked={h.done}
                  visibilityStatus={visibilityStatus}
                  setVisibilityStatus={setVisibilityStatus}
                  currentSequence={h.currentSequence}
                  highestSequence={h.highestSequence}
                />
              ))}
            </ListToday>
          </ContainerToday>
        </PageWithLoading>
        <Footer />
      </>
    );
  }