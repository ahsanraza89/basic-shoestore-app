import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger ">
        <div className="container-fluid d-flex align-items-center ">
     
         <img src="clicky.jpg" className="logo" ></img>
 
          <div className="d-flex w-100 justify-content-center">

            <ul className="navbar-nav d-flex flex-row justify-content-center ">

            <li className="nav-item">
                <b>
                <Link className="nav-link text-white "  href="/">HOME</Link>
                </b>
              </li>

              <li className="nav-item">
                <b>
                <Link className="nav-link text-white "  href="/mens">FOR MENS</Link>
                </b>
              </li>
              <li className="nav-item ">
              <b>
                <Link className="nav-link text-white"  href="/womens">FOR WOMENS</Link>
                </b>
              </li>
              <li className="nav-item">
              <b>
                <Link className="nav-link text-white" href="/kids">FOR KIDS</Link>
                </b>
              </li>

              <li className="nav-item">
              <b>
                <Link className="nav-link text-white" href="/cart">CART</Link>
                </b>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
