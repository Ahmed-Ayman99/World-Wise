import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="absolute  text-light2 top-[42px] right-[42px] bg-dark1 py-[10px] px-[14px] rounded-[7px] z-[999999] shadow-md text-base font-semibold flex items-center gap-4">
      <img className="rounded-[100px] h-10" src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button
        className="bg-dark2 rounded-[7px] border-none py-[6px] px-3  text-xs font-bold uppercase cursor-pointer"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
