import { Route , Routes , Link, createBrowserRouter, RouterProvider } from "react-router-dom"
import Homes from "./page/Homes"
import Abouts from "./page/Abouts"
import Introduces from "./page/Introduces"
import Test from "./page/Introduces/Test"


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homes />
        
        },
        {
            path: "/about",
            element: <Abouts />
        },
        {
            path: "/intro",
            element: <Introduces />,
            children: [
              {
                path: "test/:id", 
                element: <Test />,
                loader: async ({ params }) => {
                  return { id: params.id };
                },
              },
            ],
        },
        {
            path: "*",
            element: <p>error</p>
        }
    ]
)


function Routex() {
    return (<RouterProvider router={router} />)
}

export default Routex
