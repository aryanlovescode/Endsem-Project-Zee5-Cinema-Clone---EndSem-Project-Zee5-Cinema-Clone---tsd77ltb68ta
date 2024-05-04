import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./signUp";
import LoginPage from "./login";
import HomePage from "./home";
import RootLayout from "../rootLayout";

const Routes = (props)=>{
    const router = createBrowserRouter([
        {
            path: "/",
            element : <RootLayout loginStatus = {props.loginStatus} setLoginStatus = {props.setLoginStatus}/>,
            children: [
                {
                    path:"/",
                    element:<HomePage loginStatus = {props.loginStatus}/>
                },
                {
                    path: "/signup",
                    element: <SignUpPage/>
                },
                {
                    path: "/login",
                    element: <LoginPage setLoginStatus = {props.setLoginStatus}/>
                }
            ]
        },
        
    ])

    return (
        <RouterProvider router={router}/>
    );

};


export default Routes;