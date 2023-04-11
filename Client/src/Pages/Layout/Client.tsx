import React from 'react'
import { Outlet } from "react-router-dom";

const Client = (props: any) => {
  return (
    <div>
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
    <section>
        <Outlet />
    </section>
      <footer className="footer-layout" style={{ textAlign: "center" }}>
            <div>Ant Design ©2023 Created by Ant UED</div>
      </footer>
  </div>
</div>

  )
}

export default Client