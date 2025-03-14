/**
 * 
 * @param {string} placeholder 
 * @param {string} value
 * @param {(s: string) => void onChange}
 * @returns 
 */

import { useId } from "react"

export function Input ({placeholder, value, onChange}){
    const id = useId()
    return <div>
        <input 
            id={id}
            type="text" 
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} 
        />
    </div>
}