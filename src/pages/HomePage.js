import "./HomePage.css";
import Home from "../assets/home.jpg";
export const HomePage = () => {
  return (
    
      <div className="home-container">
        <div className="hero-container">
          <div className="home-img">
            <img src={Home} alt="" />
          </div>
          <form>
            <p>ENQUIRY FORM</p>
            <div className="form-item">
              <label htmlFor="Name">Name</label>
              <input
                name="Name"
                type="text"
                placeholder="Enter Your Name..."
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="Email">Email</label>
              <input
                name="Email"
                type="email"
                placeholder="Enter Your Email Address..."
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="Mobile No.">Mobile No.</label>
              <input
                name="Mobile No."
                type="number"
                placeholder="Enter Your Name..."
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="1"          
                required
              ></textarea>
            </div>

            <div className="submit-btn-container">
              <button className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
  
  );
};
