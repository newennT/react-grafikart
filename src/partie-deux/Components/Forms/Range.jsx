export function Range({value,  min, max, onChange}){
    return <div>
        <input 
            type="range"
            className="form-range"
            onChange={(e) => onChange(e.target.value)}
            value={value}
            min={min}
            max={max}
        />
    </div>
}