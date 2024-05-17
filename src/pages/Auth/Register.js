import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import Logo from "../../Components/Logo/Logo";
import { firestore } from "../../config/firebase_configure";
import "../../Features/backgroundcolor.css";
import Image6 from "../../assets/Image6.svg";
import Image5 from "../../assets/Image5.svg";

const Register = (props) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !contactNumber ||
      !password ||
      !confirmPassword
    ) {
      console.error("Please fill in all fields");

      //Show a toast message
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      console.error("Passwords do not match");

      //show a toast message
      toast.error("Passwords do not match");
      return;
    }

    const trimmedEmail = email.trim(); // remove the whitespace of the email

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        trimmedEmail,
        password
      );

      //save the user in firestore user collection by using user id
      const user = userCredential.user;
      const userRef = doc(firestore, "users", user.uid); //set document ID to user's UID
      await setDoc(userRef, {
        //Pass the data to be added to the firestore document as an object
        uid: user.uid,
        userEmail: email,
        userName: `${firstName} ${lastName}`,
        contactNumber: contactNumber,
      });

      //show a toast message
      toast.success("User registered successfully");

      navigate("/search");
    } catch (error) {
      console.error("Error registering user:", error.message);
      //show a toast message
      toast.error("Error registering user: " + error.message);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center bg-color3 min-h-screen">
      <div className="absolute top-0 right-0 p-8 text-center">
        <Logo />
        <h1 className="absolute text-2xl text-[#FFFFFF] top-50 right-20 p-1">
          Weather
        </h1>
      </div>
      <div className="bg-white flex flex-col justify-normal rounded lg:pt-6 lg:pb-0 ml-0 lg:mg:mt-0 mb-0 lg:mb-0l-4 mt-0 l lg:items-center lg:w-[900px] lg:h-[1000px]">
        <form onSubmit={handleRegister}>
          <div className="text-center lg:mx-auto items-center">
            <div>
              <h1 className="text-[#5951B5] text-xl lg:text-5xl font-extrabold mb-3 lg:mb-8 mt-5 text-center lg:mt-10">
                Input Your Information
              </h1>
              <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 opacity-40 text-center lg:mt-10">
                We need you to help us with some basic information for your
                account creation. Here are our terms and conditions. Please read
                them carefully.
              </p>
            </div>
          </div>
          <hr className="mx-auto border-dashed rounded-md w-[80%] lg:w-[800px] mt-5" />
          <div className="flex flex-col lg:flex-row justify-around py-2 my-5">
            <div className="bg-white mt-4 flex flex-col items-center ml-20 mr-5">
              <label htmlFor="firstName" className="w-72 text-left mb-5">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Arthur"
                name="firstName"
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <label htmlFor="email" className="w-72 text-left mb-5">
                Work Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="arthurclarke@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
              <label htmlFor="password" className="w-72 text-left mb-5">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="************"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
            </div>

            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around py-">
              <label className="w-72 text-left mb-5">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Clarke"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
              <label htmlFor="contactNumber" className="w-72 text-left mb-5">
                Telephone Number
              </label>
              <input
                id="contactNumber"
                type="tel"
                placeholder="+94 0000 000"
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
              <label htmlFor="confirmPassword" className="w-72 text-leftmb-5">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="**********"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72"
              />
            </div>
          </div>
          <div className="mt-4 lg:justify-between flex flex-col gap-5 items-center w-full lg:w-[80%]">
            <hr className="mx-auto border-dashed rounded-md w-[80%] lg:w-[800px] ml-10" />
            <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
              <div className="flex flex-row px-6">
                <h1 className="mr-2">Already a member?</h1>
                <button
                  className="text-[#5951B5]"
                  onClick={() =>
                    navigate(props.Register ? "/register" : "/login")
                  }
                >
                  Login
                </button>
              </div>
              <div className="w-36 mt-4 lg:mt-0">
                <button className="px-5 py-2 bg-[#5951B5] text-white rounded-full">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-opacity-5 ml-20">
        <img src={Image5} alt="no internet" className="mt-2 lg:h-[600px]" />
      </div>
      <div className="mt-20 py-40 mr-5">
        <img
          src={Image6}
          alt="no internet"
          className="mt-2 mr-5 lg:mt-5 w-full lg:h-[500px]"
        />
      </div>
    </div>
  );
};

export default Register;
