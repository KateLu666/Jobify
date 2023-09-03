import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            {" "}
            Job <span>tracking</span> App
          </h1>
          <p>
            Are you on the hunt for your dream job? Look no further than Jobify!
            Our innovative job tracking application is designed with your career
            aspirations in mind. With Jobify, you can effortlessly manage your
            job search journey. Track applications, location, and interviews all
            in one place. Stay organized, stay focused, and land that perfect
            job with Jobify by your side.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
