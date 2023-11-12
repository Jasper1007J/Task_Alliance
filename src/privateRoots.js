import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoots(props){
  // let auth = {token: true}
  return (
    props.authToken? <Outlet/> : <Navigate to='/authentication/sign-in' />
  )
}