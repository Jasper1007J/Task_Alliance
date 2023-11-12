import { Navigate, Outlet } from "react-router-dom"

export default function protectedRoutes(props){
    // let auth = {token:true}
    return (
        props.authToken? <Navigate to='/dashboard' /> : <Outlet/>
    )
}