import { Row, Col, Container } from "react-bootstrap";
import banner_pic from "./Components/images/banner_pic.jpg";
import banner_pic_1 from "./Components/images/banner_pic_1.jpg";
import "./App.css";
import { useState } from "react";
import Childreninschool from "./Components/images/Childreninschool.jpg";
import responsible from "./Components/images/responsible.jpg";
import studyimg from "./Components/images/studyimg.jpg";
import dpworldcontainerattheport from "./Components/images/dpworldcontainerattheport.jpg";
import heroimage from "./Components/images/heroimage.jpg";
import railserviceattheterminal from "./Components/images/railserviceattheterminal.jpg";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Womaninmetalfactory from "./Components/images/Womaninmetalfactory.jpg";
import logo from "./Components/images/logo.png";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
function App() {
  const [mail, setMail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The mail you entered was: ${mail}`);
  };
  return (
    <div className="App">
      {/* .............................Header................................... */}
      <Container fluid className="banner">
        <Row className="flex-container">
          <Col>
            {" "}
            <img className="logo" src={logo} />
          </Col>
          <Col className="list">
            <div className="cta">
              <a href="#about_page">About Us</a>{" "}
            </div>
            <div className="cta">
              {" "}
              <a href="#our_presence ">Our Presence</a>{" "}
            </div>
            <div className="cta">
              {" "}
              <a href="#initiatives">Our Initiatives</a>{" "}
            </div>
            <div className="cta">
              {" "}
              <a href="#news">News</a>{" "}
            </div>
            <div className="cta">
              {" "}
              <a href="#careers">Careers</a>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      {/* ..............................Home_Page................................. */}
      <div class="banner_heading">
        <img className="img" src={banner_pic} />
        <div class="top-left">
          <h1 className="home_head">Moving India Everyday</h1>
          <p className="home_subhead">The leading port operator in the world</p>
        </div>
      </div>
      {/* ..............................About_Us................................. */}
      <div id="about_page">
        <Container className="banner_2">
          <h1 className="banner_2_heading">
            Transforming India Into a Global Trade Powerhouse
          </h1>
          <Row className="banner2_row">
            <Col className="banner2_para">
              With two-thirds of chief economists expecting a world-wide
              recession in 2023, the global economy is in a precarious position.
              Together we can reduce fragmentation in supply chains, ensuring
              the future viability of global trade and the prosperity of
              communities around the world.
            </Col>
            <Col>
              <img src={banner_pic_1} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* ..............................Our Presence................................. */}
      <div id="our_presence">
        <Container className="map_container">
          <Row>
            <Col>
              <ComposableMap>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography key={geo.rsmKey} geography={geo} />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </Col>
            <Col className="map_text">
              <h1>Connecting India With The World</h1>
              <p className="map_para">
                PSA sees the growth potential in India and has been alongside
                India for more than 20 years. PSA is an early participant of
                India’s privatisation program in the container terminal sector
                with the first investment in Tuticorin Container Terminal in
                1998, followed by subsequent investments in container terminals
                in Chennai (2007), Kolkata (2014) and Navi Mumbai (2014). In
                2021, PSA entend its range of service offerings with investment
                into Ameya Logistcs ( Mumbai ) and Honeycomb Logistics ( Mundra
                ) CFS.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ...........................Our Initiatives.............................. */}
      <div id="initiatives"></div>{" "}
      <div className="news">
        <Container className="initiatives">
          <div>
            <h1>Integrating the world for a sustainable future</h1>
            <h5 className="init_text">
              PSA is a purpose-driven company and always has been. Increasing
              complexity in global supply chains drives the need for integrated
              logistics. We aim to fulfil that need by sustainably and
              responsibly delivering better, simpler and more reliable outcomes
              for our customers – improving life for all by integrating the
              world.
            </h5>
          </div>
          <Row>
            <Col>
              <Row className="study_init">
                <img className="responsibile" src={studyimg} />
                <h3 className="init_heading">
                  {" "}
                  Our Approach to Sustainability
                </h3>
                <p className="init_text">
                  Looking beyond our business to address the lasting legacy we
                  can create for our industry and society.
                </p>
              </Row>

              <Row className="study_init">
                <img className="responsibile" src={responsible} />
                <h3 className="init_heading">Responsible Business Practices</h3>
                <p className="init_text">
                  As a global business, having strong foundations to ensure we
                  are operating responsibly is vital to our long-term success.
                </p>
              </Row>
            </Col>
            <Col>
              <img className="children" src={Childreninschool} />
              <h3 className="init_heading">Our Legacy</h3>
              <p className="init_text">
                Looking beyond our business to address the lasting legacy we can
                create for our industry and society.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ..................................News..................................*/}
      <div id="news">
        <Container className="highligh_container">
          <div className="highlights">
            <h2 className="highlight">PSA India in action</h2>
            <h5 className="view_all">
              <a href=" ">View ALL</a>
            </h5>
          </div>
          <Row>
            <Col className="railservice_pic">
              <img src={railserviceattheterminal} />
              <h3 className="rail_text">
                PSA INDIA INNOVATIVE RAIL INCENTIVE TO DRIVE DECARBONISATION OF
                UK SUPPLY CHAINS
              </h3>
              w
            </Col>

            <Col>
              <Row className="pic_banner">
                <img src={heroimage} />
                <h4 className="top_text">
                  ICC AND PSA INDIA ANNOUNCE LONG-TERM PARTNERSHIP TO DRIVE THE
                  GLOBAL GROWTH OF CRICKET
                </h4>
              </Row>

              <Row className="pic_banner">
                <img src={dpworldcontainerattheport} />
                <h4 className="top_text">
                  PSA INDIA AND STANDARD BANK PARTNER TO EXPAND TRADE FINANCE IN
                  AFRICA
                </h4>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* .............................Careers.............................. */}
      <div id="careers">
        <div className="women_container">
          <img className="women_pic" src={Womaninmetalfactory} />
          <div className="text">
            <div className="women_text">
              <h1 className="women_head">Join A World Of Innovations Today</h1>
              <h4 className="women_subhead">
                We're a global leader in container trade and logistics. And
                we're embarking on an industry-defining transformation that will
                change the way the world moves. It’s a big moment for all of us
                – and we all have our part to play. Are you ready?
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* ............................View Job Openings............................. */}
      <div className="footer">
        <Container className="footer_container">
          <h1 footer_head> Connect with us Today</h1>
          <form className="footer_form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input type="submit" />
          </form>
          <Row className="footer_row">
            <Col sm={2}>
              {" "}
              <a href="https://india.globalpsa.com/">PSA India Locations</a>
            </Col>
            <Col sm={2}>
              {" "}
              <a href="https://trendlyne.com/portfolio/superstar-shareholders/custom/?query=psa%20india%20pte%20ltd">
                Investors
              </a>
            </Col>
            <Col sm={2}>
              {" "}
              <a href="https://www.globalpsa.com/">PSA Global website</a>
            </Col>
            <Col sm={2}>
              {" "}
              <a href="https://en.wikipedia.org/wiki/PSA_Group">Commercials</a>
            </Col>
            <Col sm={2}>
              {" "}
              <a href="https://www.google.com/search?q=psa+careers&oq=psa+care&aqs=chrome.1.69i57j0i512l6j0i10i512j0i512l2.4861j0j4&sourceid=chrome&ie=UTF-8">
                Careers
              </a>{" "}
            </Col>
            <Col sm={2}>
              {" "}
              <a href="https://psacorp.com/pgs/TermsConditions.aspx">
                Terms and Conditions
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
