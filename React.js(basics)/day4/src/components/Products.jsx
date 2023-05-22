import Cards from './Card'
import { useEffect, useState } from 'react'

import { getData } from '../services/axios.service'
import { product_url } from '../constants/api.constant'
 
 
 

const Products = ({prod}) => {
  const[ProdData,setProdData]=useState([])
  const fetchData=async()=>{
    const response= await getData(product_url)
    setProdData(response.data.products)
  }
  useEffect(()=>{
   fetchData();
  },[])
  return (
    <div style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-between' }}>
   {ProdData.map((product)=>{
    return(<Cards key={product.id} prod={product} />)
})}
   </div>
  )
}

export default Products
