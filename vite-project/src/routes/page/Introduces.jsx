import { Link, Outlet } from "react-router-dom";

function Introduces() {
  return (
    <>
      <div>
        <h1>Introduces</h1>
        <Link to="./test/1"> 1 </Link>
        <Link to="./test/2"> 2 </Link>
        <Link to="./test/3"> 3 </Link>
        <Link to="./test/4"> 4 </Link>
      </div>

      <Outlet />
    </>
  );
}

export default Introduces;
