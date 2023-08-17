import { useNavigate } from "react-router-dom";
import { AiFillContacts } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/services/authSlice";
import Cookie from "js-cookie";

const Navbar = () => {
  const user = JSON.parse(Cookie.get("user"));
  const token =  Cookie.get("token");
  const [logout] = useLogoutMutation(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    const data = await logout(token);
    dispatch(removeUser());
    console.log(data);
    navigate("/login");
  };
  // console.log(user)
  return (
    <nav className="flex justify-between items-center bg-blue-50 px-10 shadow-sm my-2">
      <h1 className="flex items-center gap-3">
        <AiFillContacts className="text-2xl text-yellow-500" />
        <span className="font-bold text-blue-800">ReContact</span>
      </h1>
      <div className="flex items-center gap-5">
        <div>
          <p>{user?.name}</p>
          <small>{user?.email}</small>
        </div>
        <button
          onClick={logoutHandler}
          className="bg-gray-400 px-3 py-1 rounded text-white cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
