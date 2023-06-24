import apiRequest from "@/api/apiRequest";
import React, { useState } from "react";

function Register() {
  const [inputs, setInputs] = useState({
    nickname: "",
    username: "",
    password: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    apiRequest.post("/auth/register", inputs);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className=" w-[600px]  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Nickname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="nickname"
            type="text"
            placeholder="nickname"
            name="nickname"
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            name="username"
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
            placeholder="******************"
            onChange={handleChangeInput}
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleClick}
          >
            Sign up
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

export default Register;
