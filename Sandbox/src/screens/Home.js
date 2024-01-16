import Button from '../components/Button.js';

function Home(){
    const myButtonName = "Mon autre bouton";

    function onButtonPressed(){
        console.log("button was pressed");
    }
  
    return(
        <div>
            Hello world!!!

            <br />
            <Button name="Mon bouton" className="btn-primary" onClick={onButtonPressed} yelling/>

            <br />
            <Button 
            name={myButtonName} 
            className="btn-secondary" 
            //onClick={() => console.log("button 2 was pressed")}
            link="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
            />
        </div>
    )
}

export default Home