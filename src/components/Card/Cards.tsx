import { BiMessage } from "react-icons/bi";

import "../style/card.css";

interface CardParams{
    text: string;
    prioryt: "Alta Prioridade" | "Baixa Prioridade" | "Media Prioridade";
    srcUser: string;
};

export const Cards = ({prioryt, srcUser, text}: CardParams) => {

  return (
    <aside className="card">
        <div className="card">
            <span className={`priority ${prioryt.slice(0, 1)}`}>{prioryt}</span>
            <p className="text-cart">{text}</p>

            <div className="cart-img">
                <span className="msg"><BiMessage /></span>
                <img className="img-cart" src={srcUser}/>
            </div>
        </div>
    </aside>
  )
}
