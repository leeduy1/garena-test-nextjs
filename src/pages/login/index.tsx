import apiRequest from "@/api/apiRequest";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async () => {
    const res = await apiRequest.post("/auth/login", inputs);
    const accessToken = res.data.accessToken;
    const refreshToken = res.data.refreshToken;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/game");
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className=" w-[600px]  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            name="password"
            onChange={handleChangeInput}
            placeholder="******************"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleClick}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
