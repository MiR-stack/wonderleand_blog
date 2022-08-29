
function dropdownItem({ href, name }) {
  return (
    <li className=" py-2 px-xl-3">
      <a className="text-decoration-none text-light" href={href}>{name}</a>
    </li>
  );
}

export default dropdownItem;
