import { Modal } from "@mui/material"
import { useState } from "react"

import "../style/modal.css"

interface ModalProps{
    isOpen: boolean;
    isClose: () => void;
}
export const Modals = ({isOpen, isClose}: ModalProps) => {
  return (
    <Modal 
        onClose={isClose}  
        open={isOpen} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        className="modal"
    >
        <div className="dialog-conteiner">
            <button onClick={isClose}>X</button>
            <form>
                <label htmlFor="priority">Prioridade: </label>

                <textarea placeholder="Digite sua tarefa..."></textarea>
            </form>
        </div>
    </Modal>
  )
}
