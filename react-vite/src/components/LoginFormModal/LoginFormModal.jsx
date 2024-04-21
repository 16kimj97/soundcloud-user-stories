import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverResponse = await dispatch(thunkLogin({ email, password }));
    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  const loginDemo = async () => {
    closeModal();
    dispatch(thunkLogin({
      email: "demo@example.com",
      password: "password"
    }));
  };

  return (
    <div className="login-modal">
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Log In</button>
        <hr />
        <button type="button" onClick={loginDemo}>Login as Demo-user</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
