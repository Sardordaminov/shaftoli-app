import React from 'react'
import { categoryList } from "../../data/data"
import "./categories.css"

const categories = () => {
    return (
        <>
            {categoryList.map((el) => (
                <div className='item' key={el.id}>
                    <div>
                        <p className='item-title'>{el.icon}{el.categoryName}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default categories