
function Card(props){
    return(
        <div className="card">
            <img src={props.data.src} alt="" className="card-image"/>
            <h3 className="card-title">{props.data.itemName}</h3>
        </div>
    );
}

export default Card;