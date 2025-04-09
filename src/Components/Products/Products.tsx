
import { useEffect, useState } from 'react'
import './products.css'

import ProductsCard from './ProductsCard/ProductsCard'

{/* Fetcheld be az adatokat a products jsonból és jelenítsd meg a products__container elemben*/ }
export type ProductType = {
  title: string
  price: number
  image: string
}

/*Az alábbiakat állítsd be a producst.css-ben */
/* 767px alatt egy sorban 2 óra jelenjen meg */
/* 767px felett egy sorban egyszerre 3 óra jelenjen meg */
/* 992px felett egy sorban egyszerre 4 óra jelenjen meg */

/* 767 px alatt 2rem a fölöt 3rem legyen a rész az elemek között */

const Products = () => {

  const [products,setProducts] = useState<ProductType[]>([])
  
  useEffect(()=>{
    fetch("products.json")
    .then(a=>a.json())
    .then(data => setProducts(data))
  },[])

  return (
    <section className="products container" id="products">
      <h2 className="section__title">
        Products
      </h2>

      <div className="products__container">
        {products.map(p => <ProductsCard {...p}></ProductsCard>)}
      </div>
    </section>
  )
}

export default Products