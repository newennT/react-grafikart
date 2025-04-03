import { useEffect, useRef, useState } from "react"
import { Input } from "../HookUseRef/Input"

function useToggle (initial) {
    const [state, setState] = useState(initial)
    const toggle = () => setState(v => !v)
    return [state, toggle]
}

function useIncrement ({base = 0, max = Infinity, min = -Infinity}) {
    const [state, setState] = useState(base)
    return {
        count: state,
        increment: () => setState(v => v < max ? v+1 : v),
        decrement: () => setState(v => v > min ? v-1 : v)
    }
}

function useDocumentTitle (title){
    const titleRef = useRef(document.title)

    useEffect(() => {
        return () => {
            document.title = titleRef.current
        }
        
    }, []);

    useEffect(() => {
        document.title = title ? title : titleRef.current
    }, [title]);
}

function useFetchApi (url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept' : 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r => r.json())
        .then(data => {
            setLoading(false)
            setData(data)
        })
        .catch((e) => {
            setErrors(e)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    return {
        loading, data, error
    }
}

function HookPersonnalise() {
    const [checked, toggleCheck] = useToggle()
    const {count, increment, decrement} = useIncrement({
        base: 0,
        max: 10,
        min: 0,
    })

    const [name, setName] = useState('')
    useDocumentTitle(name ? 'Editer ' + name : null)

    const {loading, data, errors} = useFetchApi('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

    return <>
        <div className="container mb-5">
            <h1>useToggle</h1>
            <p className="alert alert-info">Fonction pour un case à cocher avec toggle entre les deux états</p>
            <input type="checkbox" checked={checked} onChange={toggleCheck} />
            {checked && 'Je suis coché'}
        </div>
        
        <div className="container mb-5">
            <h1>useIncrement</h1>
            <p className="alert alert-info">Fonction pour incrémenter ou décrémenter un compteur avec une limite min de 0 et une limite max de 10</p>
            <p>Compteur {count}</p>
            <button onClick={increment} className="btn bg-secondary text-light mx-2">Incrémenter</button>
            <button onClick={decrement} className="btn bg-secondary text-light mx-2">Décrémenter</button>
        </div>

        <div className="container mb-5">
            <h1>useDocumentTitle</h1>
            <p className="alert alert-info">Fonction pour changer le title du document si on écrit quelque chose dans l'input. Si rien d'écrit, c'est le titre original (grâce à useRef) qui s'affiche.</p>
            <Input value={name} onChange={setName} label="Nom" />
        </div>

        <div className="container mb-5">
            <h1>useEffect pour API</h1>
            <p className="alert alert-info">Fonction pour récupérer et afficher les données d'une API</p>
            {loading && <div>Chargement...</div>}
            {errors && <div>{errors.toString()}</div>}
            {data && <div>
                <ul>
                    {data.map(post => (<li key={post.id}>{post.title}</li>))}
                </ul>
            </div>}
        </div>

        <div className="container mb-5">
            <h1>Adresse avec plein de Hooks</h1>
            <p><a href="https://usehooks.com">usehooks.com</a></p>
        </div>
    </>
}

export default HookPersonnalise