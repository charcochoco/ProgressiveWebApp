const weekdays = [
    "lundi", "mardi", "mercredi",
    "jeudi", "vendredi", "samedi", "dimanche"
]

function Agenda(props){
    // weekdays.forEach((day) => {
    //     console.log(day);
    // })

    //const capitalizedWeekDays = weekdays.map((day) => day.toUpperCase())

    //console.log(capitalizedWeekDays);

    return(
        <div className="m-3">
            <ul>
                {/* {weekdays} */}
                {weekdays.map((day) => (
                    <li key={day}>
                        {props.day === day ?
                            <b>{day.toUpperCase()}</b>
                        :
                            day.toUpperCase()
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Agenda;