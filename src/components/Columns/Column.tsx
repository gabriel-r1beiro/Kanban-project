import { Cards } from "../Card/Cards"
import { Header } from "./Header"

import "../style/columns.css";

export const Column = () => {
    return (
        <section className="column">
            <Header title="Pendente" color="red"/>

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