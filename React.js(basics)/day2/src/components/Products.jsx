import Cards from './Card'

const Products = ({prod}) => {
  return (
    <div style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-between' }}>
   {prod.map((product)=>{
    return(<Cards key={product.id} prod={product} />)
})}
   </div>
  )
}

export default Products
