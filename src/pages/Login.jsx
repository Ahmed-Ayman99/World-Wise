import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

import Button from "../ui/Button";

const Login = () => {
  const [email, setEmail] = useState("ahmed@gmail.com");
  const [password, setPassword] = useState("pass1234");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill the form");

    login(email, password);
    navigate("/app");
  };

  return (
    <section className="flex justify-center items-center h-[100%]">
      <form
        onSubmit={handleSubmit}
        className="bg-dark2 rounded-md py-5 px-8  mx-auto flex flex-col gap-5 w-[460px]"
      >
        <div className="flex flex-col mb-6 gap-[5px]">
          <label
            className="text-base font-semibold text-light2"
            htmlFor="email"
          >
            Email address
          </label>

          <input
            className="text-dark0 w-[100%] rounded-md py-2 px-3 transition-all duration-1000 text-base border-none bg-light3 focus:outline-none focus:bg-white "
            placeholder="ahme@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-6 gap-[5px]">
          <label
            className="text-base font-semibold text-light2"
            htmlFor="password"
          >
            Password
          </label>

          <input
            className="text-dark0 w-[100%] rounded-md py-2 px-3 transition-all duration-1000 text-base border-none bg-light3 focus:outline-none focus:bg-white "
            placeholder="PASSWOR"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="">
          <Button>Login</Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
