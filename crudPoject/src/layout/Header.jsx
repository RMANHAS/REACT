import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

// import Products from "../data";



export default function Header() {
  const amount=useSelector(state=>state.amount)



  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  //logout function

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // for seach bar
  const [search, setSearch] = useState();

  const searchHandler=(e)=>{
  e.preventDefault();
  console.log(search)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark nav-dark">
        <div className="container">
          <Link className="navbar-brand" to="#">
            Logo
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          {/* used search bar */}


   

{/* searchbar is used */}
<div className="search-bar">
  <form onSubmit={searchHandler}>
    <input type="text" value={search} placeholder="search here" onChange={(e)=>setSearch(e.target.value)}/>
   

  </form>

</div>


        

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {name ? (
                <>
                  <li className="nav-link active">
                    <button
                      className="btn btn-primary"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-success mx-2"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li>
             <NavLink type="button" className="btn btn-primary position-relative " to='/carddetails'>
  card
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {amount}
    <span className="visually-hidden">unread messages</span>
  </span>
</NavLink>



              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
