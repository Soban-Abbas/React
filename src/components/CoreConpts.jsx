
function CoreConpts(props) {
    return (
        <li id='core-concepts'>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.discription}</p>
        </li>

    )
}

export default CoreConpts;