import { useEffect, useState } from "react";
import { useRefSync } from "./useRefSync";

export function useFetch (url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setErrors] = useState(null)
    const optionsRef = useRefSync(options)


    useEffect(() => {
        fetch(url, {
            ...optionsRef.current,
            headers: {
                'Accept' : 'application/json; charset=UTF-8',
                ...optionsRef.current?.headers
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
    }, [url]);

    return {
        loading, data, error, setData
    }
}