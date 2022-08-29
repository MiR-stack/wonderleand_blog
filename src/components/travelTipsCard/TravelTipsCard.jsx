import Content from "../cardContent/Content";
import classes from "./card.module.css";

function TravelTipsCard({ data, reverse }) {
  const { date, author, title, shortDec, tag } = data;
  return (
    <div className={`${classes.card} ${reverse ? classes.reverse : null}`}>
      <div className={classes.image}>
        <img
          className={classes.img}
          src="https://source.unsplash.com/400x400"
          alt="images"
        />
        <p className={classes.tag}>
          <i className="fa-solid fa-tag"></i> {tag}{" "}
        </p>
      </div>
     
      <Content
        styles={{ maxWidth: "600px", zIndex: "2" }}
        title={{ text: title, size: "md" }}
        ContentHeader={{ date: date, author: author }}
        shortDec={{ dec: shortDec }}
        button={{ text: "read more" }}
      />
    </div>
  );
}

export default TravelTipsCard;
