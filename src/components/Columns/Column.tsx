import { Cards } from "../Card/Cards"
import { Header } from "./Header"

import "../style/columns.css";
import { Modals } from "./Modals";
import { useState } from "react";
interface ColumnPrams {
    title: string;
}
export const Column = ({title}: ColumnPrams) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => 
    return (
        <section className="column">
            <Header title={title} color="red" />
            <Modals isOpen={open} isClose={handleClose}/>
            <Cards
                prioryt="Alta Prioridade"
                text="Testes em andamento, entregamos em uma semana, ou pulamos da ponte daqui uma semana ok chefe, e amanha vou faltar"  
                srcUser="https://i.pinimg.com/originals/66/b3/24/66b3247f3e0ed3fa5279221874f628ac.jpg"
            />
            <Cards
                prioryt="Baixa Prioridade"
                text="Testes em andamento, entregamos em uma semana, ou pulamos da ponte daqui uma semana ok chefe, e amanha vou faltar"  
                srcUser="https://i.pinimg.com/originals/66/b3/24/66b3247f3e0ed3fa5279221874f628ac.jpg"
            />
            <Cards
                prioryt="Media Prioridade"
                text="Testes em andamento, entregamos em uma semana, ou pulamos da ponte daqui uma semana ok chefe, e amanha vou faltar"  
                srcUser="https://i.pinimg.com/originals/66/b3/24/66b3247f3e0ed3fa5279221874f628ac.jpg"
            />
        </section>
    )
};            