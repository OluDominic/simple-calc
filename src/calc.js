import React, { useState } from 'react'
//import button from './button';
import Result from './result';
import './calc.css'

const Calc=()=> {

    const [data, setData] = useState('');

    const handleClick = (e, button)=> {
        setData(data.concat(e.target.name));

        if(button == "=") {
            calculate()
        }

        else if(button == "C") {
            reset();
        }

        
    }

    const add =(e)=> {
        setData(data.concat(e.target.name));

        if(data===""){
            setData(null)
        }
    }
    console.log(data)
    const calculate =()=> {
        var res = ""
        if (data.includes('--')){
            res = data.replace('--', '+')
        }
        else {
            res = data
        }

        try {
            setData(eval(res).toString())
        } catch (error) {
            setData('error')
        }
    }

    const reset =()=> {
        setData('')
    }

    return(
        <div className="calc-main">
            <div className="calc">
                <div className="output">
                    <Result>{data}</Result>
                </div>
                <div className="calc-func">
                <button className="highlight" onClick={reset} name="clear">C</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick} name="6">6</button>
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
                <button onClick={handleClick} name="0">0</button>
                <button className="highlight" onClick={calculate} name="=">=</button>
                <button className="highlight" onClick={add} name="+">+</button>
                <button className="highlight" onClick={handleClick} name="-">&ndash;</button>
                <button className="highlight" onClick={handleClick} name="/">&divide;</button>
                <button className="highlight" onClick={handleClick} name="*">&times;</button>

                </div>
                </div>
        </div>
    );
}

export default Calc