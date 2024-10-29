import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Layout from '../../components/layout/Layout'
import Form from './form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate=useNavigate();
  const handleCreateBlog= async (data)=>{
   try{ const response =await axios.post(`${baseUrl}/blog`,data,{
    headers:{
      "Content-type":"multipart/form-data",
      "Authorization":localStorage.getItem("token")
    }
  })
  if(response.status===201){
    navigate("/")
  }
  else{
    alert('something went wrong');
  }}
  catch(error){
    alert(error?.response?.data?.message)
  }
  }
  return (
   <>
   <Layout>
<Form type='Create' onSubmit={handleCreateBlog}/>

   </Layout>
   </>
  )
}

export default AddBlog
