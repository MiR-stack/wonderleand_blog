function Content({
  topDec,
  ContentHeader,
  title,
  shortDec,
  button,
  styles,
  classes,
  children
}) {
  const sizes = {
    lg: {
      fontSize: "calc(1.3rem + 1.3vw)",
    },
    md: {
      fontSize: "calc(1rem + .8vw)",
    },
    sm: {
      fontSize: "calc(1rem + .5vw)",
    },
  };
  const variantSD = {};
 

  return (
    <div className={classes} style={{...styles,zIndex:'2'}}>
      {topDec ? (
        <p
          className=" text-muted mb-2"
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "calc(.9rem + .3vw)",
            margin: "0px",
          }}
        >
          {" "}
          {topDec}{" "}
        </p>
      ) : null}
      {ContentHeader && (
        <ul
          className="fa-ul d-flex m-0 ms-4 ps-sm-2 mb-1 gap-5  text-capitalize text-muted"
          style={{ fontSize: "calc(.7rem + .5vw)", ...ContentHeader.style }}
        >
          <li>
            <span className="fa-li">
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            <span style={{ fontFamily: "'Crimson Text', serif" }}>
              {ContentHeader.date}
            </span>
          </li>
          <li>
            <span className="fa-li">
              <i className="fa-solid fa-pen"></i>
            </span>
            <span style={{ fontFamily: "'Crimson Text', serif" }}>
              {ContentHeader.author}
            </span>
          </li>
        </ul>
      )}

      {title && (
        <h2
          className="text-uppercase fw-bolder"
          style={{
            ...sizes[title.size],
            fontFamily: "'Roboto Condensed', sans-serif",
            ...title.style,
          }}
        >
          {title.text}{" "}
          <span
            className={title.strong ? "bg-light px-2 text-success" : "d-none"}
          >
            {" "}
            {title.strong}
          </span>
        </h2>
      )}
      {shortDec && (
        <p className="text-muted" style={variantSD[shortDec.variant]}>
          {shortDec.dec}
        </p>
      )}
      {button && (
        <a
          className={`${button.className} fw-bolder text-capitalize text-decoration-none`}
          href="/"
          style={{ ...button.style,color:'black' }}
        >
          {button.text} <i className="fa-solid fa-arrow-right"></i>
        </a>
      )}
      {children}
    </div>
  );
}

export default Content;
