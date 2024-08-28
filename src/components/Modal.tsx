import React from "react"
import ReactDOM from "react-dom"
import '../components/modal.css'

type Props = {
    children: React.ReactNode
}

function Modal({ children }: Props) {
    return ReactDOM.createPortal(
        <div className="container-of-modal">
            <div className="modal">
                {children}
            </div>
        </div>
        , document.body)
}

export default Modal