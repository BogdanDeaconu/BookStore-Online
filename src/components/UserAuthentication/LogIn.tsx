import { Link, useNavigate } from "react-router-dom";

import styles from "./LogIn.module.scss";
import useForm from "../../hooks/use-form";
import { useDispatch } from "react-redux";
import { userStatusActions } from "../../context/use-status-slice";

const possibleErrors = {
  email: "",
  password: "",
};

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, formErrors, handleInputChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    possibleErrors
  );
  
  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const possibleUser =handleSubmit(event);
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((user: any) => user.email === possibleUser.email && user.password === possibleUser.password);

    if (user) {
      dispatch(userStatusActions.login(user.email));
      navigate("/");
    } else {
      alert("Wrong email or password");
    }

  };

  return (
    <div className={styles.login}>
      <img src="public\assets\Login & register image\image.jpg"></img>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Log In</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <div className={styles.inputs}>
            <h2>Email</h2>
            <input
              type="email"
              id="email"
              placeholder={formErrors.email ? formErrors.email : "Email"}
              value={formData.email}
              onChange={handleInputChange}
              className={formErrors.email ? styles.input_error : ""}
            />

            <h2>Password</h2>
            <input
              type="password"
              id="password"
              placeholder={
                formErrors.password ? formErrors.password : "Password"
              }
              value={formData.password}
              onChange={handleInputChange}
              className={formErrors.password ? styles.input_error : ""}
            />

            <div className={styles.checkbox}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me?</label>
            </div>
          </div>
          <button type="submit" className={styles.login_button}>
            Log In
          </button>
        </form>

        <div className={styles.footer}>
          <Link to="/forgot-password">
            <p>Forgot your password?</p>
          </Link>

          <Link to="/register">
            <p>Register as new user</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
