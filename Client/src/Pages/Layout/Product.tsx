import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = (props:any) => {
  const TakeData = (data:any) => {
    props.currdata(data._id)
  }
  return (
    <>
  <div className="khung">
  <header>
  </header>
  <nav>
      <div className="khung-nav">
        <a href={"/"}>Home</a>
        <a href={"/Product"}>Product</a>
        <a href={"/SignIn"}>SignIn</a>
        <a href={"/SignUp"}>SignUp</a>
      </div>
    </nav>
  <section style={{height : "80%"}}>
    {/* <div className="section-banner" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/bg-pattern.png?v=1613541007")', backgroundPosition: 'center', backgroundColor: 'white'}}>
      <div className="section-banner-title">
        <h1>CAT'S TONGUE COOKIE</h1>
      </div>
    </div> */}
    <div className="Collection" >
      <div className="Collection-fream">
        <div className="Collection-Category">
          <div className="Collection-Category-frame">
            
            <div className="Collection-Category-frame-ul">
              <ul>
                {props.data?.data?.map((data:any) => <li key={data._id} onClick={() => TakeData(data)} >{data.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="Collection-Product">
          <div className="Collection-Product-item1">
          </div>
          <div className="Collection-Product-child">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer-layout" style={{ textAlign: "center" }}>
            <div>Ant Design ©2023 Created by Ant UED</div>
    </footer>
</div>

    </>
  )
}

export default Product