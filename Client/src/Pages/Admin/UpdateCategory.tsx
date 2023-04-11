import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { GetOne } from '../../API/product';
import { render } from 'react-dom';
const UpdateCategory = (props:any) => {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const {id} = useParams();   
    useEffect(() => {
        const CurrentProduct = props?.data?.data?.find((data:any) => data._id == id);
        reset(CurrentProduct)
    },[props])
    const OnHandleSubmit = async (data:any) => {
        props.OnUpdate(data);
        // navigate("Show/Category")
    }
  return (
    <div>
    <form onSubmit={handleSubmit(OnHandleSubmit)} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Cập nhật Name</label>
    <input type="text" className="form-control" {...register("name")} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <button type="submit" className="btn btn-primary">Cập nhật danh mục</button>
</form>

    </div>
  )
}

export default UpdateCategory