import { useEffect, useState } from 'react';

import Button from '../components/Button.js';

function Counter(props){
    // let number = 0;

    //CA ne marche pas, le state n'est pas mis à jour, donc pas de rendu
    // function increment (){
    //     number++
    // }

    const [number, setNumber] = useState(0);

    function increment (){
        setNumber(number + 1);
    }

    // const [number, setNumber] = useState({
    //     'value': 2,
    //     'squareValue': 4
    // });

    // function increment (){
    //     let newNumber = Object.assign({}, number);
    //     newNumber.value += 1;
    //     newNumber.squareValue += number.value ** 2;

    //     let newNumber2 = {...number, 'value': newNumber2.value +1}
    //     setNumber(newNumber);
    // }

    //const [switched, setSwitched] = useState()

    function changementBord(){
        console.log("rendu")
        //setSwitched(!switched);
    }

    useEffect(changementBord, [number]);

    return(
        <div>
            <h3 className="text-center">Compteur</h3>

            <div className='d-flex justify-content-center'>
                <h4>{number}</h4>
                <Button 
                    name="incrémenter" 
                    className="btn-secondary mx-5" 
                    onClick={increment}
                />

                <Button 
                    name="décrémenter" 
                    className="btn-secondary mx-5" 
                    onClick={() => setNumber(number - 1)}
                />
            </div>
        </div>
    )
}

export default Counter;