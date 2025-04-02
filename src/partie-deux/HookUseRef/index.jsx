import {useRef } from "react";
import { Input } from "./Input";

function HookUseRef () {

    const ref = useRef();
    console.log('App', ref);

   
    return <div>
        <Input label="prefix" ref={ref} />
    </div>

}

export default HookUseRef