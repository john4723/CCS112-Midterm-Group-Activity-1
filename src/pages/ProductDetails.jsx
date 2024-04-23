import { 
    useParams,
    Link
} from 'react-router-dom';
import React, { useState } from 'react';

function ProductDetails(props){
    const params = useParams();
    const selectedItem = props.data[params.id - 1];

    // const { id }  =  useParams();
    // const selectedItem = props.filter(data => data.id === id);

    //for the counter
    const [counter, setCount] = useState(1);

    const decrement = () => {
        counter > 1 && setCount(c => c - 1);
    }

    const increment = () => {
        setCount(c => c + 1);
    }
    
    function handleAddCartItem(id){
        const newCartItem = {
            itemID: params.id,
            quantity: counter,
        };
    
        props.setCart(c => [...c, newCartItem]);
    }

    return(
        <>
            <div className='grid-product-details'>
                <img src={selectedItem.src} alt="sample" className='product-details-image' />
                <div className="product-description">

                    <h2 className='product-name'>{selectedItem.itemName}</h2>
                    <p className='product-subtitle'>&#8369;{selectedItem.price}</p>
                    <p className='product-effect'>{selectedItem.effect}</p>
        
                    <p className='quantity'>Quantity:</p>
                    <div className='container-btn-product-details'>
                        <div className='container-counter-btn'>
                            <button className='btn btn-counter' onClick={decrement}>-</button>
                            <p className='counter'>{counter}</p>
                            <button className='btn btn-counter' onClick={increment}>+</button>
                        </div>

                        <Link to="/mycart" className='btn-add-to-cart' onClick={() => handleAddCartItem(params.id)}>Add to cart</Link>
                    </div>

                </div>
            </div>
            <div className='grid-more-details'>
                <div>
                    <p className='product-subtitle'>Product Details:</p>
                    <hr />
                    <p className='product-story'>{selectedItem.description}</p>

                </div>
            </div>
        </>

    );
}

export default ProductDetails;