import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
