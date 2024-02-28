import AboutImg from '../assets/about.jpeg';
import "./About.css";

export const About = () => {
  return (
    <>
      <h2 className='about-heading'>About Us</h2>
      <div className="about-container">
        <div className="about-img">
            <img src={AboutImg} alt="about image" />
        </div>
        <div className="about-desc">
          <p>
            Sethi Group's upcoming venture in has recently been launched in the
            much anticipated residential venture at Sethi Venice Sector 150
            Noida Yamuna Expressway. The venture contains all outstanding
            facilities like shopping centers, school, ground, and hospital in
            the area, grocery store for daily needs, laundry solutions, swimming
            share area, children share, ping pong, billiards & pool for
            magnificent life. Sethi Group Venice Noida is an attractive and
            affordable personal venture. Sethi Group brings great requirements
            for a residential venture which includes a healthy environment,
            superior design, top great quality structure and top great quality
            area. Sethi Group residential venture is a place where you can find
            the perfect balance of nature, entertainment fitness & pleasure.
            Sethi Groups New Apartments Sector 150 Noida is available in 3/4
            BHK. Well-constructed, magnificent 3/4 BHK "Sethi Venice" Apartments
            with efficient and comfortable contemporary facilities.
          </p>
        </div>
      </div>
    </>
  );
};
