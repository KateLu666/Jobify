import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="firstName" labelText="First name" />
        <FormRow type="text" name="lastName" labelText="Last name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block">
          Sign up
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
