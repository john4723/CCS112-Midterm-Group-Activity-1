import CartCard from '../components/CartCard';

function MyCart(props){

    const itemArray = props.itemArray;

    let finalPrice = 0;
    let totalItems = 0;

    props.cart.map(currItem => {
        finalPrice += itemArray[currItem.itemID - 1].price * currItem.quantity
        totalItems += currItem.quantity
    });
    


    return(
        <div className="container-cart-main">

            <div className="container-cart">
                {props.cart.map((currItem, index) => {
                    return <CartCard key={index} 
                                    index={index}
                                    data={currItem} 
                                    itemArray={props.itemArray}                          
                            />
                })}
            </div>

            <div className="container-total-amount">
                <h1>Order Summary:</h1>
                <hr />
                <div className='container-price'>
                    <p className='price'>Overall Price: ({totalItems} item/s) </p>
                    <p className='price'>&#8369;{finalPrice}</p>
                </div>
            </div>

        </div>
    );
}

export default MyCart;