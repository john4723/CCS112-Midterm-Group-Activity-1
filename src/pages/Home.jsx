import { Link } from 'react-router-dom';
import Card from '../components/Card';



function Home(props){


    return(
        <div className='container-home'>
            <h1 >What's new:</h1>
            <div className="grid-home">
                {props.data.map((currItem) =>{
                    return(<Link to={'/ProductDetails/' + currItem.id} key={currItem.id}>
                                <Card data={currItem}></Card> 
                            </Link>);
                })}
            </div>
        </div>
    );
}

export default Home;