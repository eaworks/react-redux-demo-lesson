import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { remoteItem, increace, decreace } from '../control/cartSlice';


function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className='cartItem'>
            <img src={img} alt="" />
            <div className='cartInfo'>
                <h4>{title}</h4>
                <h4>{price}TL</h4>
                <div>
                    <button className='cardQuantityButton' onClick={() => { dispatch(increace(id)) }}>
                        <BsChevronUp />
                    </button>
                    <p className='cardQuantity'>{quantity}</p>
                    <button className='cardQuantityButton' onClick={() => { dispatch(decreace(id)) }}>
                        <BsChevronDown />
                    </button>
                </div>
                <button className='cardDeleteButton' onClick={() => { dispatch(remoteItem(id)) }}>Sil</button>
            </div>

        </div>
    )
}

export default CourseItem