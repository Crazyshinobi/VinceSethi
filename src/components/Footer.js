import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-info">
          <div className="disc-container">
            <h2>Disclaimer</h2>
            <p>
              The content is for information purposes only and does not
              constitute an offer to avail of any service. Prices mentioned are
              subject to change without notice and properties mentioned are
              subject to availability. Images for representation purposes only.
              This is the official website of authorised marketing partner. We
              may share data with RERA registered brokers/companies for further
              processing. We may also send updates to the mobile number/email id
              registered with us.
            </p>
          </div>
          <div className="trending-container">
            <h2>Trending Tags</h2>
            <ul>
              <li>#Eldeco</li>
              <li>#Eldecogroup</li>
              <li>#Eldeconoida</li>
              <li>#Eldecolavidabella</li>
              <li>#3bhkflatsineldeco</li>
              <li>#4bhkflatsineldeco</li>
              <li>#4bhkflatsinnoida</li>
            </ul>
          </div>
          <div className="quick-container">
            <h2>Quick Contact</h2>
            <h3>Phone:</h3>
            <p>+91 9654980778</p>
            <p>+91 9654980778</p>
            <h3>Email:</h3>
            <p>info@eldecigroup.in.net</p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© All Rights Reserved by Vince Sethi Group</p>
      </div>
    </>
  );
};
