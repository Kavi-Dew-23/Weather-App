import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/Button/button";
import Image3 from "../../assets/Image3.svg";
import Image4 from "../../assets/Image4.svg";
import Logo from "../../Components/Logo/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (trimmedEmail === "" || password === "") {
      toast.error("Please fill in all fields");
      return;
    }
    //Simulate a successful login
    toast.success("Login Successfully");
    navigate("/Search");
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center bg-color3 min-h-screen">
      <div className="absolute top-0 right-0 p-8 text-center">
        <Logo />
        <h1 className="absolute text-2xl text-white top-50 right-20 p-1">
          Weather
        </h1>
      </div>
      <div className="bg-white flex flex-col justify-normal rounded lg:pt-6  lg:pb-0 ml-0 lg:mg:mt-0 mb-0 lg:mb-0l-4 mt-0 l lg:items-center lg:w-[1500px] lg:h-[900px]">
        <div>
          <h1 className="text-[#5951B5] text-xl lg:text-5xl font-extrabold mb-3 lg:mb-8 mt-5 text-center lg:mt-10">
            Log Into Your Account
          </h1>
          <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 opacity-40 text-center lg:mt-10">
            To access your account, please enter your credentials below. By
            logging in, you agree to our terms and conditions.
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-white mt-4 flex flex-col items-center"
        >
          <div className="flex flex-col mb-3 lg:mb-4 items-start lg:mt-8">
            <label className="mb-2 ml-2 lg:ml-4">Work Email</label>
            <input
              className="border rounded-full lg:mt-4 py-2 px-3 text-grey-darker w-full lg:w-72 "
              type="text"
              placeholder="arthurclarke@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:mt-5 mb-3 lg:mb-4 items-start">
            <label className="mb-2 ml-2 lg:ml-4">Password</label>
            <input
              className="border rounded-full py-2 px-3 text-grey-darker w-full lg:w-72 "
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-row lg:mt-8 mb-3 lg:mb-4 items-center">
            <input type="checkbox" className="mr-2" />
            <h1>Remember Me</h1>
          </div>
          <div className="mt-3 lg:mt-4 w-full lg:w-36">
            <Button text="Log In" onClick={handleLogin} />
          </div>
        </form>
        <div className="mt-5 lg:mt-20  flex justify-center items-center">
          <h1 className="text-center">Don't have an account?</h1>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="text-[#5951B5] ml-2"
          >
            Register
          </button>
        </div>
      </div>
      <div className="bg-black bg-opacity-5 ml-20">
        <img
          src={Image3}
          alt="no internet"
          className="mt-2 lg:mt-5 w-full lg:h-[800px]"
        />
      </div>
      <div className="bg-black bg-opacity-5 mt-20 mr-20">
        <img
          src={Image4}
          alt="no internet"
          className="mt-2 mr-5 lg:mt-5 w-full lg:h-[800px]"
        />
      </div>
    </div>
  );
};

export default Login;
