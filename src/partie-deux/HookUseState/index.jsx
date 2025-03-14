import { useEffect, useState } from "react"
import { Input } from "../Components/Forms/Input"
import { Checkbox } from "../Components/Forms/Checkbox"

function HookUseState(){
    const [showInput, setShowInput] = useState(true)

    return <>
        <div>
            <Checkbox
                checked={showInput}
                onChange={setShowInput}
                id="titleShow"
                label="Afficher le champ titre"
            />
            {showInput && <EditTitle /> }
        </div>
        <Timer />
        <div style={{ height: '300vh'}}></div>
    </>
}

function EditTitle(){
    const [title, setTitle] = useState('Cours React de Grafikart')
    const [firstname, setFirstname] = useState('')
    const [y, setY] = useState(0)

    useEffect(() => {
        const originalTitle = document.title
        return () => {
            document.title = originalTitle
        }
    })

    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => {
        const handler = () => {
            console.log('scroll');
            setY(window.scrollY);
        }
        window.addEventListener('scroll', handler)
            return () => {
                window.removeEventListener('scroll', handler)
            }
        }
    )

    return <div className="vstack gap-2">
        
        <Input
            placeholder="Modifier le titre"
            value={title}
            onChange={setTitle}
        />
        <Input
            placeholder="Prénom"
            value={firstname}
            onChange={setFirstname}
        />
        <div>
            Scroll : {y}
        </div>
    </div>
}

function Timer(){
    const [duration, setDuration] = useState(5)
    const [secondsLeft, setSecondsLeft] = useState(duration)
    const handleChange = (v) => {
        setDuration(v)
        setSecondsLeft(v)

    }

    useEffect(() => {

        const timer = setInterval(() => {
            setSecondsLeft(v => {
                if (v <= 1) {
                    clearInterval(timer)
                    return 0
                } 
                return v-1
            })
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [duration]);

    return <div className="vstack gap-2">
        <Input 
            value={duration}
            onChange={handleChange}
            placeholder="Timer..."
        />
        <p>
            Décompte : {secondsLeft}
        </p>
    </div>
}

export default HookUseState