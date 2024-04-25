
import { Routes, Route } from "react-router-dom"
import React from 'react'
import { HomePage } from "../pages/Home/HomePage"
import { ProductList } from "../pages/Products/ProductList"
import { ProductDetail } from "../pages/ProductDetail"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { CartPage } from "../pages/Cart/CartPage"
import { ProtectedRoute } from "./ProtectedRoute"

export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>

    </Routes>
    </>
  )
}
