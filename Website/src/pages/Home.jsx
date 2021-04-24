import React from 'react';
import fernImage from '../assets/img/fern-767-430.jpg';

const Home = () => {
  const {
    REACT_APP_PWA_BASE_URL
  } = process.env;
  return (
    <>
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
                <p className="font-weight-light font-italic mb-0">“As a man that has worked consistently since my teens, unemployment would be very hard to accept, however going out in the job market, in my late 50's is a sobering thought.”</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <p className="font-weight-light font-italic mb-0">"As an owner my team and I volunteered delivering food to whanau as I have all the logistics.. trucks, chillers, trailers etc. With no income, we thought we would help those even worse off. 3 weeks in I have. Een asked to make 1500 meals for the elderly which will be paid for. This has impacted me financially but now with business coming my way it will allow me to get my staff back to work"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
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
              backgroundImage: `url('${fernImage}')`
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
              backgroundImage: `url('${fernImage}')`
            }}></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2 className="text-success">Our solution</h2>
              <p className="lead mb-0">IndigiShare aims to support whānau, through helping new and existing Māori SMEs access small loans through a cooperative whānau to whānau structure.</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{
              backgroundImage: `url('${fernImage}')`
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
                width="645"
                height="363"
                src="//www.youtube.com/embed/NKsqVIpqtes"
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
    </>
  );
};

export default Home;
