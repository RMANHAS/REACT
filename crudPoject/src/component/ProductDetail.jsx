import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'

import actionCreators from '../state'


export default function ProductDetail() {
  

  

    const [product,setProducts]=useState("")
    const {id}=useParams()
   async function getDetail(){
      const {data}=  await axios.get(`http://localhost:3000/Products/${id}`)
      console.log(data)
      setProducts(data)
    }
    useEffect(()=>{
        getDetail()
    },[])

const dispatch=useDispatch()
const  {counter} = bindActionCreators(actionCreators,dispatch)
   
  return (
   <Layout>
   <div className='row '>
    <div className='col-md-12 d-flex justify-content-center my-5 '>
      <div className='col-md-3'>
   <div className="card mb-3" style={{maxWidth: 750}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text"><small className="text-body-secondary">{product.price}</small></p>
        <p className="card-text"><small className="text-body-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small></p>
        
      </div>
      <button className='btn btn-success' onClick={ ()=>dispatch(counter(0))} >   Add to card</button>
     
    </div>
    
  </div>
</div>

      </div>
    </div>

   </div>
 
   </Layout>
  )
}
