import { FaPlus } from "react-icons/fa";

import "../style/header.css";

interface HeaderParams{
    color: "red" | "green";
    title: string;
}
export const Header = ({title}: HeaderParams) => {
    return (
        <header className="header-col">
            <span className="title-col">{title}</span>
            <button type="button"><FaPlus/></button>
        </header>
    )
}
