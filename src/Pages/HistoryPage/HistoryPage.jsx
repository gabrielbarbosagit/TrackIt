import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ContainerHistoric, ContainerCalendar } from "./style";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { PageWithLoading } from "../../components/PageWithLoading/PageWithLoading";


export default function HistoricPage(){


    const [ value, onChange ] = useState(new Date());
    const [ isLoading, setIsLoading ] = useState(true);


    useEffect(() => {
        
        setTimeout(() => {
            
        setIsLoading(false)
    }, 2000);
}, []);


return (

    <>
    
    <Header />
    <PageWithLoading isLoading={isLoading}>
        <ContainerHistoric>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            <ContainerCalendar>
                <Calendar onChange={onChange} value={value}/>
            </ContainerCalendar>
        </ContainerHistoric>
    </PageWithLoading>
    <Footer />
        
        </>
);
}