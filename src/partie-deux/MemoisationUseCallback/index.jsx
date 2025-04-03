import { useState, memo, useCallback } from "react";
import { Input } from "../Components/Forms/Input";


function MemoisationUseCallback(){
    const [name, setName] = useState('')

    const handleClick = useCallback(() => {
        console.log('Hello')
    }, [])

    return <>
        <div className="container my-2 vstack gap-2">
            <p>Utiliser la memoisation ou les useCallback pour optimiser les temps de chargement</p>
            <Input label="Prénom" onChange={setName} value={name} />
            <div>
                {name.toUpperCase()}
            </div>
            <InfoMemo onClick={handleClick} />
        </div>
    </>
}

const InfoMemo = memo(function Info ({onClick}) {
    return <>
        <div className="alert alert-info" onClick={onClick}>
            Lorem ipsum dolor sit amet
        </div>
    </>
})

export default MemoisationUseCallback