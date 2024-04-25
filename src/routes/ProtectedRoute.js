import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const navigate=useNavigate();
    const token = JSON.parse(sessionStorage.getItem("token"));
  return token?{children}:{navigate to="/"}
}
