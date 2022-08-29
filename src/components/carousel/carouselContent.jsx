import Content from "../cardContent/Content";

function CarouselInnerDiv({ writer, date, title, shortDec, active }) {
  return (
    <div className={`carousel-item ${active}`}>
      <div className="d-flex align-items-center " style={{ minHeight: "70vh" }}>

        <Content
          classes="container text-center text-light d-flex flex-column align-items-center"
          styles={{ maxWidth: "700px" }}
          ContentHeader={{
            date: date,
            author: writer,
            style: { color: "white !important" },
          }}
          title={{ text: title, size: "md" }}
          shortDec={{ dec: shortDec }}
          button={{
            text: "read more",
            className: "btn btn-success text-light",
          }}
        />
      </div>
    </div>
  );
}

export default CarouselInnerDiv;
