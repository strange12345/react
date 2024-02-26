import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [value, setValue] = useState(10);
    
    const handleButton = (val) => {
        if (val === 2) {
            const v = value*val
            if (v <=15) {
                setValue(value*val);
            }

        }
        else if (val === -1) {
            setValue(value - 1)
        }
        else if (val === 10) {
            setValue(10)
        }
        else {
            setValue(value + val)
        }
    }

    const handleInput=(event)=>{
        const v = parseInt(event.target.value);
         setValue(v);
    }
    return (
        <div>
            <button  disabled={value <= 5} onClick={() => handleButton(-1)}>-</button>
            <div><input type="number" id="values" value={value} onChange={handleInput}></input></div>
            <button disabled={value >= 15} onClick={() => handleButton(1)}>+</button>
            <button disabled={value >= 15} onClick={() => handleButton(2)}>double</button>
            <button disabled={value === 10} onClick={() => handleButton(10)}>reset</button>


        </div>
    );
}
