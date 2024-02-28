import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <main>
      <div className="contact-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.021227097757!2d77.345564!3d28.59914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50fbcf6c9e1%3A0x9399440b6d5b5ee6!2sNoida%20Sector%2012%20%26%2022!5e0!3m2!1sen!2sin!4v1709035645051!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <form>
          <p>Contact us by filling this form!</p>
          <div className="form-item">
            <label htmlFor="Name">Name</label>
            <input name="Name" type="text" placeholder="Enter Your Name..." required />
          </div>
          <div className="form-item">
            <label htmlFor="Email">Email</label>
            <input
              name="Email"
              type="email"
              placeholder="Enter Your Email Address..." required
            />
          </div>
          <div className="form-item">
            <label htmlFor="Mobile No.">Mobile No.</label>
            <input
              name="Mobile No."
              type="number"
              placeholder="Enter Your Name..." required
            />
          </div>
          <div className="form-item">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message..." required
            ></textarea>
          </div>

          <div className="submit-btn-container">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
};
