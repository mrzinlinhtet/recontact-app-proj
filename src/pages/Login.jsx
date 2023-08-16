import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="w-96 flex flex-col items-center bg-gray-50 p-10 rounded shadow gap-5"
      >
        <h1 className="text-blue-500 text-xl font-bold">Login Account</h1>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
        />
        <div className="flex flex-col gap-3">
          <small className="text-xs">
            No have an account?
            <Link to="/register" >
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
