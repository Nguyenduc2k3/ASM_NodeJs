import React from 'react'
import { Outlet } from 'react-router-dom'

const Resgister = () => {
  return (
    <>
    <div className="khung" style={{height: "1200px"}}>
   
   <nav>
      <div className="khung-nav">
        <a href={"/"}>Home</a>
        <a href={"/Product"}>Product</a>
        <a href={"/SignIn"}>SignIn</a>
        <a href={"/SignUp"}>SignUp</a>
      </div>
    </nav>
   <section style={{height : "80%", backgroundImage: "url(../../img/footer-bg_ab1f0246-9f03-407d-9f84-e769576fa6be.webp)" , backgroundRepeat: "no-repeat", backgroundPosition : "bottom"}}>
    <Outlet />
   </section>
   <footer >
     <div className="footer-contact">
       <div className="footer-us">
         <div className="footer-frame">
           <div className="footer-us-title">
             <h2>About Us</h2>
           </div>
           <div className="footer-us-content">
             <p>The way the cakes and pastries from 
               <br />
               Cookie Crumbles, melt in your mouth is to be 
               <br />
               experienced to believe. It has a solid 
               <br />
               start and yet that is the way the cookie
               <br />
               crumbles..!</p>
           </div>
         </div>
       </div>
       <div className="footer-Support">
         <div className="footer-Support1">
           <div className="footer-Support1-title">
             <h2>About Us</h2>
           </div>
           <div className="footer-Support1-content">
             <a href={""}>Help</a>
             <a href={""}>Delivery Information</a>
             <a href={""}>Privacy Policy</a>
             <a href={""}>Terms &amp; Conditions</a>
             <a href={""}>Shipping details</a>
           </div>
         </div>
         <div className="footer-Support2">
           <div className="footer-Support1-title">
             <h2>Support</h2>
           </div>
           <div className="footer-Support1-content">
             <a href={""}>Help</a>
             <a href={""}>Delivery Information</a>
             <a href={""}>Privacy Policy</a>
             <a href={""}>Terms &amp; Conditions</a>
             <a href={""}>Shipping details</a>
           </div>
         </div>
         <div className="footer-Support3">
           <div className="footer-Support1-title">
             <h2>Collection</h2>
           </div>
           <div className="footer-Support1-content">
             <a href={""}>Help</a>
             <a href={""}>Delivery Information</a>
             <a href={""}>Privacy Policy</a>
             <a href={""}>Terms &amp; Conditions</a>
             <a href={""}>Shipping details</a>
           </div>
         </div>
       </div>
       <div className="footer-Contactus">
         <div className="footer-frame">
           <div className="footer-us-title">
             <h2>Contact us</h2>
           </div>
           <div className="footer-us-content">
             <p>The way the cakes and pastries from 
               <br />
               Cookie Crumbles, melt in your mouth is to be 
               <br />
               experienced to believe. It has a solid 
               <br />
               start and yet that is the way the cookie
               <br />
               crumbles..!</p>
           </div>
         </div>
       </div>
     </div>
   </footer>
 </div>
 
     </>
  )
}

export default Resgister