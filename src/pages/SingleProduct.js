import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom'

const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const params = useParams();
    const history = useHistory();
    
 
    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    }, [params._id]);


    return (
        <div>
            <button className="bg-yellow-500 my-4 mx-5 px-4 rounded-full font-bold" onClick={ () => { history.goBack() } }>Back</button>
                    <img style={{height: 280}} src={product.image} alt="" />
                    <div className=""><h2 className="text-lg font-bold py-2 mx-3">{product.name}</h2></div>
                    
                    <div className="flex  mt-4 mx-3">
                        <span>₹ {product.price}</span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
                    </div>
                </div>
    )
}

export default SingleProduct
