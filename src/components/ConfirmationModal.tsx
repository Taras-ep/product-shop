import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "./Modal.tsx"

type Props = {
    text: string
    onYes: () => void
    onClose: () => void
}

function ConfirmationModal({ text, onYes, onClose}: Props) {
    const [isOpen, setIsOpen] = useState(true)

    if (!isOpen) {
        return null;
    }

    return <Modal>
        <div>
            <div>{text}</div>
            <button title="yes" onClick={onYes}>
                Yes
            </button>
            <button title="no" onClick={() => {
                onClose()
                setIsOpen(false)
            }}>
                No
            </button>
        </div>
    </Modal>
}

export default ConfirmationModal