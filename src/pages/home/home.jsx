import Navbar from "../../layout/navbar/nav";
import CarouselInnerDiv from "../../components/carousel/carouselContent";
import classes from "./home.module.css";
import TravelTipsCard from "../../components/travelTipsCard/TravelTipsCard";
import Section from "../../layout/section/Section";
import Content from "../../components/cardContent/Content";
const logo = require("../../logos/logo.png");
const coffe = require("../../logos/coffe.png");

function Home() {
  const logos = [logo, coffe, logo, coffe, logo];

  const blog = {
    date: "octobor 21, 2022",
    author: "habibur rahman",
    tag: "travel tips",
    title: "top hiking trails in the paruvian amazon rain forest",
    shortDec:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet debitis odio culpa eos dolore eum soluta ullam iste cum est provident, dolorem, velit autem earum. Eos voluptates repellat doloribus!",
  };

  console.log(classes);

  return (
    <div className="home">
      <div
        className={classes.heroSection}
        style={{
          backgroundImage: "url('https://source.unsplash.com/1000x1000')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ background: "rgba(0,0,0,.6)" }}>
          <Navbar />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <CarouselInnerDiv
                date={"octobar 11, 2019"}
                writer="habib mir"
                title="everyday urban concrate jungle"
                shortDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet consectetur nostrum omnis tempore veniam. Harum error saepe et eius numquam reiciendis esse amet nihil id voluptates doloremque, porro modi?"
                active={"active"}
              />
              <CarouselInnerDiv
                date={"octobar 11, 2019"}
                writer="habib mir"
                title="everyday urban concrate jungle"
                shortDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet consectetur nostrum omnis tempore veniam. Harum error saepe et eius numquam reiciendis esse amet nihil id voluptates doloremque, porro modi?"
              />
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <main className={classes.mask}>
        <div className="container">
          <div className={classes.brands}>
            {logos.map((logo) => (
              <div className={classes.image} key={Math.random()}>
                <img className={classes.img} src={logo} alt={logo} />{" "}
              </div>
            ))}
          </div>

          <Section
            subtitle={"lorem ispum doler"}
            title={"travel assentials"}
            strong={"tips"}
          >
            <TravelTipsCard data={blog} />
            <TravelTipsCard data={blog} reverse={true} />
          </Section>
        </div>
      </main>
      <section className={` ${classes.newsletter}`}>
        <div className="container">
          <div className="row g-3 py-5 align-items-center ">
            <div className="col-lg-6">
              <div className={classes.nlImage}></div>
            </div>
            {/* <div className="col-lg-6" style={{zIndex:'2'}}>
              <p
                style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: "calc(.9rem + .3vw)",
                  margin: "0px",
                }}
              >
                lorem ispum doler
              </p>
              <Title title='finding the perfect tarails to hike is easy with' strong='newsletter' size='md' />
              <p className={`${classes.nlShortDec} text-muted`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                culpa similique veniam. Dolorem doloribus eos repudiandae,{" "}
              </p>
              <div className={classes.nlInputGroup}>
                <input
                  className={classes.nlInput}
                  type="text"
                  placeholder="Name"
                />
                <input
                  className={classes.nlInput}
                  type="email"
                  placeholder="Email"
                />
                <button className={classes.nlButton}>
                  subscribe <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div> */}

            <Content
            classes='col-lg-6'
              topDec="lorem ispum doler"
              title={{
                text: "finding the perfect tarails to hike is easy with",
                strong: "newsletter",
                size: "md",
              }}
              shortDec={{
                dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum culpa similique veniam. Dolorem doloribus eos repudiandae",
              }}
            >
              <div className={classes.nlInputGroup}>
                <input
                  className={classes.nlInput}
                  type="text"
                  placeholder="Name"
                />
                <input
                  className={classes.nlInput}
                  type="email"
                  placeholder="Email"
                />
                <button className={classes.nlButton}>
                  subscribe <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Content>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
