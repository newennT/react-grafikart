import { useEffect, useRef } from "react"

export function Modal ({children, onClose}) {

    const dialogRef = useRef(null)

    useEffect(() => {
        dialogRef.current.showModal()
    }, []);

    const handleClose = (e) => {
        e.preventDefault()
        onClose?.()
    }

    return <dialog 
        ref={dialogRef} 
        onCancel={handleClose} 
        onClose={handleClose}
        style={{width: 'calc(100vw - 2rem)', maxWidth: 600}}
        >
        {children}
    </dialog>
}