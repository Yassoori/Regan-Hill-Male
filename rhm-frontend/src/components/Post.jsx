import {useState, useEffect} from 'react'
// import { ArrowLeft } from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loading from './Loading'

// Products Url
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Product = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const endpoint = `${productsUrl}/${id}`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setProduct(res.data)
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
        })
    }, [endpoint])

    function getFeaturedImage(product) {
        if (product && product.images && product.images[0] ) {
            return product.images[0].src
        } else {
            return 'https://placehold.co/600x400'
        }
    } // end of getFeatured Image

    if (loading) {
        return (
            <>
                <Loading/>
            </>
        )
    }

  return (
    <div id="shop-page" className='container'>
        <div className='product-container item-container'>
            <button onClick={() => navigate(-1)}><ArrowLeft/>Go Back</button>
            <img className='product-image' src={getFeaturedImage(product)} alt="Product Image"/>
            <h4 className='name'>{product.name}</h4>
            <h3>${product.prices.price}</h3>
        </div>
        <div
            id="product-description"
            dangerouslySetInnerHTML={{__html: product.description}}
        />
    </div>
  )
}

export default Product
