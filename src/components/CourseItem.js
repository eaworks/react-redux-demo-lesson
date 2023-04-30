import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function CourseItem({ id, title, price, img, quantity }) {
    return (
        <div className='cartItem'>
            <img src={img} alt="" />
            <div className='cartInfo'>
                <h4>{title}</h4>
                <h4>{price}TL</h4>
                <div>
                    <button className='cardQuantityButton'>
                        <BsChevronUp />
                    </button>
                    <p className='cardQuantity'>{quantity}</p>
                    <button className='cardQuantityButton'>
                        <BsChevronDown />
                    </button>
                </div>
                <button className='cardDeleteButton'>Sil</button>
            </div>

        </div>
    )
}

export default CourseItem