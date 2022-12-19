import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAcions'

const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector(state => state.product)
  const { title, category, image, price, description } = product
  const dispatch = useDispatch()

  useEffect(() => {
    if (id && id !== '')
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          dispatch(selectedProduct(res.data))
        }).catch(error => console.log('Error', error))
      
      dispatch(removeSelectedProduct())
  }, [id])
  return (
    <div className='d-flex '>
      {
        Object.keys(product).length === 0 ? (<div>...Loading</div>) :
          (
            <>
              <div>
                <img src={image} alt={title} />
              </div>
              <div className='p-2 m-2'>
                <div className='fw-bold fs-3'>{title} </div>
                <div className='fw-bold fs-6'>Price:${price} </div>
                <p><b>category</b>:{category} </p>
                <div className=''>{description} </div>
                <button className='btn btn-primary mt-3'> ADD TO CART</button>

              </div>
            </>

          )
      }

    </div>
  )
}

export default ProductDetails