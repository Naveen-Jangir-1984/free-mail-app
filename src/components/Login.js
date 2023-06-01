import { useState } from "react";

const Login = ({ handleLoginButton, error }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter username"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() =>
          handleLoginButton({
            id: id,
            password: password,
          })
        }
      >
        Login
      </button>
      <h5 style={{ color: "red" }}>{error && "Invalid Credentials !"}</h5>
    </div>
  );
};

export default Login;
