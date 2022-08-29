import { useState } from "react";


const styles = {
  dropdownMenu: {
    listStyleType: "none",
    left: "-5px",
    minWidth:'150px'
  },
};

function DropdownMenu({ menu, children  }) {

const [dropdown,setDropdown] = useState(false)

  return (
    <li className="py-2 py-xl-0 " onClick={()=>{setDropdown(!dropdown)}}>
      <div className="custom-dropdown px-3 " >
      <p className="fw-semibold text-light d-flex align-items-center m-0">{menu} </p>
      <ul 
        className={` custom-dropdown-items ps-3 p-xl-0 ${dropdown?'d-block':'d-none'}` }
        style={styles.dropdownMenu}
      >
        {children}
      </ul>
    </div>
    </li>
  );
}

export default DropdownMenu;
