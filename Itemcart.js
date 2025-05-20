import React from 'react'
import { useCart } from 'react-use-cart';
const Itemcart = (props) => {
    const { addItem } = useCart();

    return (
        <div className='col-10 col-md-5 col-lg-3 mx-0 mb-4'>
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.img} className="fixed-img-uniform me-3 card-body img-center" alt={props.title} />


                <div className="card-body text-center">

                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">price:₹{props.price}</h5>
                    <h5 class="card-title">weight:{props.item.weight}</h5>

                    <button
                        className="btn btn-success"
                        onClick={() =>
                            addItem({
                                id: props.item.id,
                                title: props.title,
                                price: props.price,
                                img: props.img,
                                quantity: 1
                            })
                        }
                    >
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Itemcart;