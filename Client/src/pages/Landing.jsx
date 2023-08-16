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
            Introducing Jobify - your go-to job searching website. Find your
            dream job or top talent with ease on Jobify. Our user-friendly
            interface and innovative search features make discovering the
            perfect job or candidate a breeze. Browse through a vast collection
            of listings, tailored to diverse industries and locations. Simplify
            your job search or hiring process with Jobify today!
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
