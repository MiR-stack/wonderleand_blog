function PopupBG({ triger, setTriger }) {
    return (
      <div
        className={`${
          triger ? "d-block" : "d-none"
        } position-fixed top-0 start-0 h-100 w-100 bg-dark`}
        style={{ zIndex: "998", opacity: ".5" }}
        onClick={() => setTriger(false)}
      ></div>
    );
  }
  
  export default PopupBG;
  