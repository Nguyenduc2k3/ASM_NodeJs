
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Admin from './Pages/Layout/Admin'
import AddProduct from './Pages/Admin/AddProduct'
import { CreatCategory, Delete, GetAll, GetAllCategory, GetOneCategory, RegisterUser, UpdateNewProduct, UpdatedCategory, create, loginUser, removeCategory } from './API/product'
import { useEffect, useState } from 'react'
import ShowProduct from './Pages/Admin/ShowProduct'
import UpdateProduct from './Pages/Admin/UpdateProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from './Pages/Admin/AddCategory'
import ShowCategory from './Pages/Admin/ShowCategory'
import Register from './login/register'
import Login from './login/Login'
import Home from './Pages/Client/Home'
import Client from './Pages/Layout/Client'
import DetailProduct from './Pages/Client/DetailProduct'
import Detail from './Pages/Layout/detail'
import Resgister from './Pages/Layout/Resgister'
import MainAdmin from './Pages/Admin/MainAdmin'
import UpdateCategory from './Pages/Admin/UpdateCategory'
import Product from './Pages/Layout/Product'
import ProductPage from './Pages/Client/ProductPage'

function App() {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState([]);
  const addProduct = (data:any) => {
    if (data.name == "" || data.price == "" || data.image == "" || data.description == "") {
      toast.warning("Vui lòng điền vào chỗ trống");
    }else{
      if (localStorage.getItem("role")  == "admin") {
        create(data);
        toast.success("Thêm thành công"); 
      }else{
        toast.warning("Bạn không đủ quyền!");
      }
    }
  }
  useEffect(() => {
    GetAll().then(({data}) => setdata(data))
    GetAllCategory().then(({data}) => setcategory(data))
  },[])
  

  const Remove =  (id:any) =>{
    if (confirm("Are you sure you want to remove this")) { 
      const role = localStorage.getItem('role');
       Delete(id).then(() => setdata(data.filter((data:any) => data._id !== id)))
       if (role != "admin") {
        toast("Bạn không đủ quyền ")
       }else{
        toast("Xóa thành công ")
       }

    }
  }
  const RemoveCategory =  (id:any) =>{
    if (confirm("Are you sure you want to remove this")) { 
      // const data = localStorage.getItem("role")
      if (localStorage.getItem('role') != "admin") {
        toast("Bạn không đủ quyền ")
       }else{
        removeCategory(id).then(() => setcategory(category.filter((data:any) => data._id !== id)))
        toast.success("Xóa Thành công!")
        window.location.href = "/Admin/Show/Category";
       }
    }
  }
  const Update = (data:any) => {
    const role = localStorage.getItem('role');
    if (role != "admin") {
      toast("Bạn không đủ quyền ")
     }else{
      console.log(data);
      
      UpdateNewProduct(data);
      toast("Cập nhật thành công ")
      window.location.href = "/Admin/Show";
     }
  }
  const UpdateCate = (data:any) => {
    const role = localStorage.getItem('role');
    UpdatedCategory(data);
    if (role != "admin") {
      toast("Bạn không đủ quyền ")
     }else{
      toast("Cập nhật thành công ")
      window.location.href = "/Admin/Show/Category";
     }
  }
  const AddList = async (data1:any) => {
    if ( data1.name == "" ) {
      toast.warning("Vui lòng điền vào chỗ trống");
    }else{
      const {data} = await CreatCategory(data1);
      if (localStorage.getItem('role') != "admin") {
        toast("Bạn không đủ quyền ")
       }else{
        toast.success(data.message);
        window.location.href = "/Admin/Show/Category";
       }
    }
  }
  const SignIn = async (user:any) => {
    if (user.password == "" || user.email == "" || user.name == "" || user.confirmPassword == "") {
      toast.warning("Vui lòng điền vào chỗ trống");
    }else{
      const {data} = await RegisterUser(user);
      toast.success(data.message);
    }
  }
  const login = async (user:any) => {
        if (user.password == "" || user.email == "") {
          toast.warning("Vui lòng điền vào chỗ trống");
        }else{
          const {data} = await loginUser(user) 
          toast.warning(data.message);
          if (data) {
            const token = data.accessTokent;
            localStorage.setItem("accessTokent", token);
            localStorage.setItem("role", data?.user?.role);
            if (data?.user?.role == "admin") {
             toast.success("Đăng nhập thành công");
             window.location.href = "/Admin";
            }else if(data?.user?.role == "member") {
             toast.success("Đăng nhập thành công");
             window.location.href = "/";
           }
           }
        }

  }
  //todo Client-Start ----------------------------------------------------------------


const GetCategory = async (id:string) => {
    await GetOneCategory(id).then(({data}) => setdata(data.data))     
}

  //todo Client-End ----------------------------------------------------------------


  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        //todo Admin Start
        <Route path='/Admin' element={<Admin />} >
          <Route index element={<MainAdmin />} ></Route>
          <Route path='Add' element={<AddProduct Onadd={addProduct} />} ></Route>
          <Route path='Show' element={<ShowProduct product={data} OnRemove={Remove} />} ></Route>
          <Route path='Update/:id' element={<UpdateProduct data={data} OnUpdate={Update} />} ></Route>

          <Route path='Category' element={<AddCategory Onadd={AddList} />}  ></Route>
          <Route path='Show/Category' element={<ShowCategory data={category} OnRemove={RemoveCategory} />}  ></Route>
          <Route path='Show/Category/:id' element={<UpdateCategory data={category} OnUpdate={UpdateCate} />} ></Route>
        </Route>
        //todo Admin End
        <Route path='/' element={<Client />} >
           <Route index element={<Home data={data} />} />
        </Route>
        //todo Detail Start
        <Route path='/productDeltail/:id' element={<Detail />} >
        <Route index element={<DetailProduct />} />
        </Route>
        //todo Detail End

        //todo SignIn/Up Start
        <Route path='/' element={<Resgister />} >
          <Route path='SignUp' element={<Register OnAdd={SignIn} />} />
          <Route path='SignIn' element={<Login Onlog={login} />} />
        </Route>
        //todo SignIn/Up End
        //todo Product Client Start

        <Route path='/' element={<Product data={category} currdata={GetCategory} />} >
        <Route path='Product' element={<ProductPage data={data} />} />
        </Route>

        //todo Product Client End
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
