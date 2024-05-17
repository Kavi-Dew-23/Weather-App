import React from "react";
import "../../Features/backgroundcolor.css";
import { useNavigate } from "react-router-dom";
import Botton from "../../Components/Button/button";
import Card1 from "../../assets/Card1.svg";
import Card2 from "../../assets/Card2.svg";

const LandingPage = (props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-color full-screen">
      <div className="text-left p-10">
        <h1 className="text-white text-2xl lg:text-6xl font-bold mb-5 lg:mb-10">
          Weather
        </h1>
        <div
          className="flex justify-end pr-10 pt-10 absolute top-0 right-0"
          onClick={() => navigate(props.LandingPage ? "/" : "/login")}
        >
          <Botton text="Get Started" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="mr-0">
          <img src={Card2} alt="no internet" width={450} className="mb-10" />
        </div>
        <div className="flex justify-end">
          <div className="mr-20">
            <img src={Card1} alt="no internet" width={400} className="mb-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
