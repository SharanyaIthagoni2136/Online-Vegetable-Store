import React from 'react'
import { useCart } from 'react-use-cart';

import { useNavigate } from 'react-router-dom';

function Cart({ onBuyNow }) {
  const navigate = useNavigate();
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart } = useCart();
  if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

  return (

    <section className='py-4 container'>


      <div className='py-4 container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
            <table className="table table-striped table-bordered table-hover m-0">

              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td><img src={item.img} style={{ height: '4rem' }} alt={item.title} /></td>
                    <td>{item.title}</td>
                    <td>₹{item.price}</td>
                    <td>Quantity: {item.quantity}</td>
                    <td>
                      <button className='btn btn-info me-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className='btn btn-info me-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className='btn btn-danger me-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          <div className='col-auto ms-auto'>
            <h2>Total Price: ₹ {cartTotal.toFixed(2)}</h2>

          </div>
          <div className='col-auto'>
            <button className='btn btn-danger me-2'

              onClick={() => emptyCart()}>
              Clear Cart
            </button>
<button className='btn btn-success' onClick={() => navigate('/checkout')}>
              Buy now
            </button>
            
          </div>
        </div>
      </div>

    </section>

  )
}

export default Cart