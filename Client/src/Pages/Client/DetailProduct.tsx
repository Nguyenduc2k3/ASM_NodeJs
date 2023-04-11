import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOne } from '../../API/product';

const DetailProduct = () => {
  const [data, setdata] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    GetOne(id).then(({data}) => setdata(data))
  },[])
  return (
    <>
    <div className="section-frame-Product" >
      <div className="section-frame-Product-child">
        <div className="section-frame-Product-child-image">
          <img src={`${data?.data?.image}`} />
        </div>
        <div className="section-frame-Product-child-title">
          <div className="cookie-title">
            <div className="cookie-titleh1">
              <h1>Product Detail</h1>
            </div>
            
            <div className="cookie-description">
              <div className="cookie-description-p">
                <p>{data?.data?.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-frame-Product-child-bill">
          <div className="section-frame-Product-child-bill-child">
            <div className="price">
              <div className="price-name">
                <p style={{fontSize: "1rem"}}>Product Name : </p> <span style={{paddingTop : "0px", paddingBottom : "11px"}}>{data?.data?.name}</span>
              </div>
              <div className="Pricelist">
                <div className="Pricelist-price">
                  <p>${data?.data?.price}</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-frame-Product-Description">
        </div>
    </div>
    </>
  )
}

export default DetailProduct