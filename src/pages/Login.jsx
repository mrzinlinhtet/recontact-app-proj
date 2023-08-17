import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../features/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    const { data } = await login({ email, password });
    // console.log(data.token)
    dispatch(addUser({ user: data.user, token: data.token }));
    if(data?.success) {
      navigate('/') 
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        action=""
        className="w-96 flex flex-col items-center bg-gray-50 p-10 rounded shadow gap-5"
      >
        <h1 className="text-blue-500 text-xl font-bold">Login Account</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password  "
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <div className="flex flex-col gap-8">
          <small className="text-xs">
            No have an account?
            <Link to="/register">
              <span className="text-blue-500 cursor-pointer">Sign up</span>
            </Link>
          </small>
          <button
            type="submit"
            className="bg-blue-400 mx-10 px-10 py-2 text-white rounded cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
