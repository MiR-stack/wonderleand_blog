import DropdownMenu from "../../components/dropdown/dropdownMenu";
import DropdownItem from "../../components/dropdown/dropdownItem";
import logo from "../../logos/logo.png";
import "./nav.css";
import { useState } from "react";
import PopupBg from "../../components/utils/popupBg";

function Navbar() {
  const [minNav, setMinNav] = useState(false);

  return (
    <>
      <div
        className="d-none align-items-center justify-content-between mx-xl-5 py-2 px-3 px-xl-0 text-light d-sm-flex"
        style={{ fontFamily: "'Uchen',serif" }}
      >
        <ul className="fa-ul d-flex gap-4 m-0">
          <li>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>{" "}
            01400007904
          </li>
          <li>
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>{" "}
            habibmir808@gmail.com
          </li>
        </ul>
        <div className="d-flex align-items-center gap-3">
          <p className="m-0">Socials:</p>
          <div className="d-flex gap-2">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="navbar  mx-xl-5 d-flex text-uppercase border border-start-0 border-end-0 p-3  p-xl-0 text-light">
        <ul className="fa-ul d-none d-xl-flex ms-4  text-light mb-0">
          <li>
            <span className="fa-li">
              <i className="fa-solid fa-map"></i>
            </span>
            <span className="fw-bolder ">destinations</span>
          </li>
        </ul>
        <div
          className="menuIcon d-xl-none cursor-pointer"
          onClick={() => {
            setMinNav(true);
          }}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </div>
        <PopupBg triger={minNav} setTriger={setMinNav} />
        <ul
          className={`menus  d-xl-flex align-items-center m-0 p-0  start-0 top-0 ${
            minNav ? "d-block" : "d-none"
          } `}
          style={{ listStyle: "none" }}
        >
          <div
            className={`menu_title d-flex d-xl-none justify-content-between  p-2 pb-0 pt-4 `}
          >
            <a
              href="/home"
              className="h3 text-decoration-none text-light"
              onClick={() => {
                setMinNav(false);
              }}
            >
              unicorn
            </a>
            <span
              className="btn btn-close btn-close-white"
              onClick={() => {
                setMinNav(false);
              }}
            ></span>
          </div>
          <DropdownMenu menu="home">
            <DropdownItem href={"/home1"} name={"home1"} />
            <DropdownItem href={"/home2"} name={"home2"} />
            <DropdownItem href={"/home1"} name={"home1"} />
            <DropdownItem href={"/home1"} name={"home1"} />
          </DropdownMenu>
          <DropdownMenu menu="pages">
            <DropdownItem href={"/home"} name={"home"} />
            <DropdownItem href={"/about"} name={"about us"} />
            <DropdownItem href={"/contact"} name={"contact us"} />
            <DropdownItem href={"/portfolio"} name={"portfilo"} />
          </DropdownMenu>
          <DropdownMenu menu="destinations">
            <DropdownItem href={"/destination/india"} name={"india"} />
            <DropdownItem
              href={"/destination/bangladesh"}
              name={"bangladesh"}
            />
            <DropdownItem href={"/destination/america"} name={"america"} />
            <DropdownItem href={"/destination/dubai"} name={"dubai"} />
          </DropdownMenu>
          <li className="d-none d-xl-block">
            <div className="logo" style={{ height: "100px", width: "100px" }}>
              <img className="h-100 w-100" src={logo} alt="logo" />
            </div>
          </li>
          <DropdownMenu menu="blog">
            <DropdownItem href={"/blog"} name={"blog"} />
            <DropdownItem href={"/blog/right_sidebar"} name={"right sidebar"} />
            <DropdownItem href={"/blog/left_sidebar"} name={"left sidebar"} />
          </DropdownMenu>
          <DropdownMenu menu="shop">
            <DropdownItem href={"/product/hot"} name={"hot"} />
            <DropdownItem href={"/product/tednding"} name={"trending"} />
            <DropdownItem href={"/product/recent"} name={"recent"} />
            <DropdownItem href={"/product/recomended"} name={"recomended"} />
          </DropdownMenu>
          <li>
            <a
              className="text-decoration-none text-light fw-semibold px-3 "
              href="/home"
            >
              landing
            </a>
          </li>
        </ul>

        <a
          href="/home"
          className="text-decoration-none text-light fs-3 fw-bolder d-xl-none text-capitalize "
        >
          unicorn
        </a>
        <div
          className="searchbar input-group  text-light "
          style={{ width: "200px" }}
        >
          <input className="form-control" type="search" placeholder="search" />
          <i className="fa-solid fa-search btn btn-outline-secondary "></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
