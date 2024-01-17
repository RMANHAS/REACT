import Layout from "../layout/Layout";
// import Products from "../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'

import actionCreators from '../state'


export default function Home() {
  
const dispatch=useDispatch()
const  {counter} = bindActionCreators(actionCreators,dispatch)

  const [products, setProducts] = useState([]);
  const[p,setp]=useState()


  //get products
 async function getProducts(){
const {data}=await axios.get(` http://localhost:3000/Products`)
console.log(data)
setProducts(data)
setp(data)
  }
  useEffect(()=>{
    
    getProducts()
  },[])

  const filterProduct = (name) => {
    let newProducts = p.filter((product) => {
      return product.category === name;
     
    });
    setProducts(newProducts);
  };

  const filterPrice = (price) => {
    console.log(price)
    let newProductsPrice = p.filter((product) => {
      // return product.price === price;
      if(product.price < price ){
        return price
      }
     
    }
    
    );

    
    setProducts(newProductsPrice);
  };


   // for seach bar
  //  const [search, setSearch] = useState("");

  //  const searchHandler=(e) => {
  //   e.preventDefault();
  //   console.log(search)
  
    
  // };

  



  return (
    <Layout>

     
      {/*{JSON.stringify(products,null,4)}  */}
      {/*this command will display all the data on browser */}
      <div className="row">
        <div className="col-md-3">
          <h4 className="text-center">Category</h4>


          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => filterProduct("Men")}
            >
              Men
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterProduct("Women")}
            >
              Women
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterProduct("Shirts")}
            >
             Shirts
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={()=>setProducts(p)}
            >
              All
            </button>


            <h4 className="text-center">Price Category</h4>

           
          

          </div>

          <div className="list-group">
          <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterPrice(400)}
            >
             price less than  400
            </button>

            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterPrice(800)}
            >
             price less than 800
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterPrice(1200)}
            >
             price less than 1200
            </button>

            <button
              type="button"
              className="list-group-item list-group-item-action "
              onClick={() => filterPrice(1600)}
            >
             price less than 1600
            </button>

</div>
        </div>

        <div className="col-md-9">


          <h4 className="text-center">List of all items</h4>


          {/* searchbar is used */}
     {/* <div>
  <form onSubmit={searchHandler}>
    <input type="text" value={search} placeholder="search here" onChange={(e)=>setSearch(e.target.value)}/>
 
    {
            Products 
              .filter((val) => {
                if(search == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      {val.category}
                     
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }

  </form>
</div>  */}



          <div className="row">
            {products.map((product, i) => (
              <div className="col-md-4" key={i}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Title: {product.title}</h5>
                    <p className="card-title">Category: {product.category}</p>
                    <p className="card-text">Price: {product.price}</p>
                    <Link to={`/productDetail/${product.id}`} className="btn btn-primary ">
                      More Details....
                    </Link>
                    <button className='btn btn-success' onClick={ ()=>dispatch(counter(0))}>Add to card</button>
                  </div>
                </div>
              </div>
            ))}         
          </div>
        </div>
      </div>
    </Layout>
  );
}
