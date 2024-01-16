function Footer(){
    const date = new Date()
    return(
        <div className="fixed-bottom mb-3">
            Crée par Romain Charcosset {date.toDateString()}
        </div>
    )
}

// function FooterBis(){
//     return(
//         <div>
//             crée
//         </div>
//     )
// }

//export {Footer, FooterBis};

export default Footer;