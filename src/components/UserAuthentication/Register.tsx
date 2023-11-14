import styles from "./Register.module.scss";
import useForm from "../../hooks/use-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userStatusActions } from "../../context/use-status-slice";

const possibleErrors = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, formErrors, handleInputChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    possibleErrors
  );

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const possibleUser = handleSubmit(event);
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((user: any) => user.email === possibleUser.email)) {
      alert("Email already exists");
      return;
    } else {
      users.push(possibleUser);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(userStatusActions.login(possibleUser.email));
      navigate("/");
    }
  };

  return (
    <div className={styles.register}>
      <img src="public\assets\Login & register image\image.jpg"></img>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Register</h1>
          <p>Create a new account</p>
        </div>
        <form className={styles.form} onSubmit={submitFormHandler}>
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
                formErrors.password
                  ? "Password should contain at least 8 characters"
                  : "Password"
              }
              value={formData.password}
              onChange={handleInputChange}
              className={formErrors.password ? styles.input_error : ""}
            />

            <h2>Confirm Password</h2>
            <input
              type="password"
              id="confirmPassword"
              placeholder={
                formErrors.confirmPassword
                  ? "Passwords do not match"
                  : "Confirm Password"
              }
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={formErrors.confirmPassword ? styles.input_error : ""}
            />
          </div>
          <button type="submit" className={styles.register_button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
