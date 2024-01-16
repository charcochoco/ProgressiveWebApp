import { useEffect, useState } from 'react';
import Button from '../components/Button.js';

//const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit odio a nisi venenatis finibus.`;
const LOREM_IPSUM = `test`;

function Typer(props){
    const [start, setStart] = useState(false);
    const [timer, setTimer] = useState(0);
    const [text, setText] = useState("");
    const [finalResult, setFinalResult] = useState(null);
    let finalTimer = 0;

    function startTyper (){
        setStart(true);
    }

    function textChange (e){
        //console.log(e.target.value);
        setText(e.target.value)
    }

    useEffect(changementText, [text]);

    function changementText(){
        if(text == LOREM_IPSUM){
            setFinalResult(timer);
        }       
    }

    useEffect(startTimer, [start]);

    function startTimer(){
        if(start){
            setInterval(incrementTimer, 1000);
        }
    }

    function incrementTimer(){
        setTimer(currentTimer => currentTimer +1)
    }

    if(finalResult){
        return (
            <h5>{finalResult} Secondes</h5>
        )
    }

    return (
        <div className="m-5 d-flex">
            <div className="p-2 flex-grow-1 border">
                {LOREM_IPSUM}
            </div>
            {
            !start ?
                <div className="p-2 flex-grow-1">
                    <Button 
                        name="Start !" 
                        className="btn-primary" 
                        onClick={startTyper}
                    />
                </div>
            :
                <div className="p-2 flex-grow-1">
                    <textarea
                        className="form-control"
                        rows="5"
                        value={text}
                        onChange={textChange}
                    />
                </div>
            }     
            {start && <h2>{timer}</h2>}   
        </div>
    )
}
export default Typer;