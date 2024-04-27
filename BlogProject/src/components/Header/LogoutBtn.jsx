import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/appconfig";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("logout error", error);
    }
  };
  return (
    <button onClick={logoutHandler} className="m-5">
      Logout
    </button>
  );
}
export default LogoutBtn;
