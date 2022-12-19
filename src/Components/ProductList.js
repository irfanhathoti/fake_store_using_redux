import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProduct } from '../redux/actions/productAcions'

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts.products)



    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                dispatch(setProduct(res.data))
            })
            .catch(error => {
                console.log("Error", error)
            })
    }, [])

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {
                products.map((product) => {
                    const { id, title, price, image, category } = product
                    return (
                        <div key={id} className="card m-2" style={{ width: " 18rem" }}>
                            <Link to={`product/${id}`}>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div className='fw-bold text-muted'> {category} </div>
                                    <p className="card-text"> Price: ${price} </p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProductList