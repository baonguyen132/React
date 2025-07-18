import { useLoaderData } from "react-router-dom"


function Test() {
    const {id} = useLoaderData() 

    return <div className="id">{id}</div> 
}

export default Test 