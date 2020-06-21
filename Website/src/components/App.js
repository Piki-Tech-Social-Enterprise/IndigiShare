import React, {
  useState,
  createRef
} from 'react';
import '../assets/css/App.css';
import '../assets/css/index.css';
import '../assets/scss/indigishare-platform.scss?v=1.0.0';
import '../assets/js/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/js/vendor/fontawesome-free/css/all.min.css';
import '../assets/js/vendor/simple-line-icons/css/simple-line-icons.css';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = createRef();
  const navRef = createRef();
  const handleMenuOverlayOnClick = async e => {
    e.preventDefault();
    menuRef.current.classList.toggle('clicked');
    navRef.current.classList.toggle('show');
    setShowMenu(!showMenu);
  };
  const {
    REACT_APP_WEB_NAME,
    REACT_APP_PWA_BASE_URL
  } = process.env;
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container text-center">
          <a className="navbar-brand" href="/">
            <img src={require('../assets/img/islogo-760x760.png')} height="30" className="d-inline-block align-top" alt={REACT_APP_WEB_NAME} />
            &nbsp;{REACT_APP_WEB_NAME}
          </a>
          <span className="d-none d-lg-inline-block">
            &nbsp;#IndigiShare
          </span>
          <a className="mx-sm-auto" href="https://www.hackthecrisis.nz" target="_blank" rel="noopener noreferrer">
            <img alt="Hack the Crisis NZ 2020" src={require('../assets/img/HacktheCrisisNZ_Logo Green.png')} style={{
              height: '50px'
            }} />
            <span className="d-none d-lg-inline-block" style={{
              color: 'initial'
            }}>
              &nbsp;&nbsp;&nbsp;#HacktheCrisisNZ
            </span>
          </a>
          <div className="menu" ref={menuRef} onClick={handleMenuOverlayOnClick}>
            <span />
          </div>
          <nav id="nav" ref={navRef}>
            <ul className="main text-right">
              <li><a href={`${REACT_APP_PWA_BASE_URL}/public/Login`} target="_blank" rel="noopener noreferrer">Register/Login</a></li>
              <li><a href="#IndigiShare">Insights</a></li>
            </ul>
          </nav>
          <div className="overlay" onClick={handleMenuOverlayOnClick} />
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="p-5 bg-success">Think global. Act local.<br />Indigenous focal.</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Icons Grid */}
      <section className="features-icons bg-light text-center" style={{
        paddingBottom: 0
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-fire m-auto text-success"></i>
                </div>
                <h3 className="text-success">Te Take Tuatahi<br />(1st Issue)</h3>
                <p className="lead mb-0">Whānau owning small Māori businesses have been hit hard by the lockdown/rāhui. 21,000 Māōri businesses, 76% say they need to pivot, 50% say they need cash to survive and return to sustainability.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-target m-auto text-success"></i>
                </div>
                <h3 className="text-success">Te Take Tuarua<br />(2nd Issue)</h3>
                <p className="lead mb-0">Māori unemployment was twice the rate of non-Māori before the crisis and is expected to remain twice as high. Treasury predicts a peak of 13% unemployment which could mean 26% of Māori being unemployed, and many others having income reduced.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-compass m-auto text-success"></i>
                </div>
                <h3 className="text-success">Te Take Tuatoru<br />(3rd Issue)</h3>
                <p className="lead mb-0">Businesses in general are finding it hard to access to capital to survive and Māori businesses are likely to find it just as hard, if not harder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center bg-light" style={{
        paddingTop: '5rem'
      }}>
        <div className="container">
          <h2 className="mb-5 text-success">What people are saying about the impact on their livelihoods...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                {/* <img className="img-fluid rounded-circle mb-3" src={require('../assets/img/heeni-tito.jpg')} alt="" />
          <h5>Hēni T.</h5> */}
                <p className="font-weight-light font-italic mb-0">“As a man that has worked consistently since my teens, unemployment would be very hard to accept, however going out in the job market, in my late 50's is a sobering thought.”</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                {/* <img className="img-fluid rounded-circle mb-3" src={require('../assets/img/JohnShortland-300x300.png')} alt="" />
          <h5>John S.</h5> */}
                <p className="font-weight-light font-italic mb-0">"As an owner my team and I volunteered delivering food to whanau as I have all the logistics.. trucks, chillers, trailers etc. With no income, we thought we would help those even worse off. 3 weeks in I have. Een asked to make 1500 meals for the elderly which will be paid for. This has impacted me financially but now with business coming my way it will allow me to get my staff back to work"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                {/* <img className="img-fluid rounded-circle mb-3" src={require('../assets/img/krisharn-ngamoki.jpg')} alt="" />
          <h5>Krisharn N.</h5> */}
                <p className="font-weight-light font-italic mb-0">"It has already been impacted. Cash flow has stopped but will resume at a smaller level as clients consider their options"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcases */}
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{
              backgroundImage: `url('${require('../assets/img/fern-767-430.jpg')}')`
            }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2 className="text-success">Our target market</h2>
              <p>
                We have surveyed two groups Māori Businesses and Kaihaukai (Contributors) and received 250 responses across these target groups:
              </p>
              <ul className="lead mb-0">
                <li>Māori SME owners and/or recently unemployed keen to start a business</li>
                <li>People keen to help these businesses access capital to survive and thrive</li>
              </ul>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 text-white showcase-img" style={{
              backgroundImage: `url('${require('../assets/img/fern-767-430.jpg')}')`
            }}></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2 className="text-success">Our solution</h2>
              <p className="lead mb-0">IndigiShare aims to support whānau, through helping new and existing Māori SMEs access small loans through a cooperative whānau to whānau structure.</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{
              backgroundImage: `url('${require('../assets/img/fern-767-430.jpg')}')`
            }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2 className="text-success">Our opportunity</h2>
              <p className="lead mb-0">If 1/100 people contributed at the level our research suggests they will, we can raise $12.6M to lend. 30% of Māori businesses needing access to cash to get back on their feet are looking for $1,000-10,000, we can raise these funds to lend to them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="opportunities text-center bg-light" style={{
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}>
        <div className="container">
          <h2 className="mb-5 text-success">Watch our journey...</h2>
          <div className="row">
            <div className="col">
              <iframe
                title="IndigiShare"
                width="560"
                height="315"
                src="//www.youtube.com/embed/cERv96n0iyA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Be an early adopter and register to login now!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <a className="btn btn-block btn-success p-3" href={`${REACT_APP_PWA_BASE_URL}/public/Login`} target="_blank" rel="noopener noreferrer"><h1>Let's go...</h1></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              {/* <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'About')} className="text-success">About</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Contact')} className="text-success">Contact</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Terms of Use')} className="text-success">Terms of Use</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Privacy Policy')} className="text-success">Privacy Policy</a>
                </li>
              </ul> */}
              <p className="text-muted small mb-4 mb-lg-0">&copy; IndigiShare 2020</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                {/* <li className="list-inline-item mr-3">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Facebook')}>
                    <i className="fab fa-facebook fa-2x fa-fw text-success"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Twitter')}>
                    <i className="fab fa-twitter-square fa-2x fa-fw text-success"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#IndigiShare" onClick={e => showAlert(e, 'Instagram')}>
                    <i className="fab fa-instagram fa-2x fa-fw text-success"></i>
                  </a>
                </li> */}
                <li className="list-inline-item">
                  <a href="https://github.com/Piki-Tech-Social-Enterprise/IndigiShare" target="_blank" rel="noopener noreferrer" title="IndigiShare on GitHub">
                    <i className="fab fa-github fa-2x fa-fw text-success"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
