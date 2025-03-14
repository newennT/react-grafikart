import { useMemo, useState } from "react"
import { Input } from "../Components/Forms/Input"

function HookUseMemo (){
    const [firstname, setFirstname] = useState('John')
    const [password, setPassword] = useState('123456')
    const security = useMemo(() => {
        return passwordSecurity(password)
    }, [password])

    return <div className="container my-3 vstack gap-2">
        <Input
            label="Nom d'utilisateur"
            value={firstname}
            onChange={setFirstname}
        />
        <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
        />
        Sécurité : {security}
    </div>

}

function passwordSecurity(password) {
    if (password.length < 3) {
        return 'Faible'
    } else if (password.length < 6) {
        return 'Moyen'
    } else {
        return 'Fort';
    }
}

export default HookUseMemo