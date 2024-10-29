import React, { useEffect, useState } from 'react'
import Form from './form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
  const navigate= useNavigate()
  const {id} = useParams()
  console.log(id)
  const [blogm, setblogm] = useState({})
  const fetchblog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    setblog(response.data.data);
  };
  useEffect(() => {
    fetchblog();
  }, [])
  
    const editBlog= async(data)=>{
      try{
        const response= await axios.patch(`${baseUrl}/blog/${id}`, data ,{
            headers:{
              "Content-type":"multipart/form-data",
                "Authorization":localStorage.getItem("token")
            }
        })
        if(response.status === 200){
            navigate('/')
        }
        else{
            alert('something went wrong')
        }}
        catch(error){
          alert(error?.response?.data?.message)
        }
      }
  return (
    <div>
     <Form type='Edit' onSubmit={editBlog}/> 
    </div>
  )
}

export default EditBlog
