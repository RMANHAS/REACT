import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';

function Profile() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    useEffect(()=>{
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
  return (
<Layout>
    <h3>
        hello ,{name} <br />
        email {email}
    </h3>
</Layout>
  )
}

export default Profile