import { Route , Routes , Link } from "react-router-dom"
import Homes from "./page/Homes"
import Abouts from "./page/Abouts"
import Introduces from "./page/Introduces"

function Routex() {
    return (
        <>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/introduce">Introduce</Link>
            </ul>
            <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/about" element={<Abouts />} />
                <Route path="/introduce" element={<Introduces />} />
                
            </Routes>
        </>
    )
}

export default Routex
