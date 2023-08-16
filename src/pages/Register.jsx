import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../features/api/authApi";

const Register = () => {
  const [name, setName] = useState("Zin Lin Htet");
  const [email, setEmail] = useState("zzz122@gmail.com");
  const [password, setPassword] = useState("asdffdsa");
  const [confirmPassword, setConfirmPassword] = useState("asdffdsa");
  const [error, setError] = useState(null);
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    const data = await registerUser(user);
    if (data?.data?.success) {
      navigate("/login");
    } 
      
    
    console.log(data);
    setError(data?.error?.data?.errors);
    console.log(data?.error?.data?.errors);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        action=""
        className="w-96 flex flex-col items-center bg-gray-50 p-10 rounded shadow gap-5"
      >
        <h1 className="text-green-500 text-xl font-bold">Register Account</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <small className="text-red-500">{error?.name}</small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <small className="text-red-500">{error?.email}</small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Enter your confirm password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <small className="text-red-500">{error?.password}</small>
        <div className="flex flex-col gap-3">
          <small className="text-xs">
            Already have an account?
            <Link to="/login">
              <span className="text-blue-500 cursor-pointer">Login</span>
            </Link>
          </small>
          <button
            type="submit"
            className="bg-green-400 mx-10 px-10 py-2 text-white rounded cursor-pointer"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
