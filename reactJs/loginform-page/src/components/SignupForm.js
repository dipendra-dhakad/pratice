import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comformPassword: "",
  });

  const [showCreatePass, setShowCreatePass] = useState(false);

  const [accountType, setAccountType] = useState("student");
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.comformPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData = { ...formData };


     const finalData = {
        ...accountData,
        accountType
     }

    console.log("Printing account data ", finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-slate-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-slate-900 text-slate-50"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>

        <button
           onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-slate-900 text-slate-50"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 w-full mt-[20px]" >
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
              First Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
              Last Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
            className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
          />
        </label>

        <div className=" w-full flex gap-x-4 mt-[20px] ">
          <label htmlFor="w-full ">
            <p  className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
              Create  Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showCreatePass ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              name="password"
              placeholder="Enter Password"
             className="bg-slate-800 rounded-[0.75rem] w-fill-available p-[12px] text-slate-50"
            />
            {/* <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span> */}

            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
             className="absolute left-[23.5rem] right-[43.5rem] top-[540px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
             
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPass ? "text" : "password"}
              value={formData.comformPassword}
              onChange={changeHandler}
              name="comformPassword"
              placeholder="Confirm Password"
             className="bg-slate-800 rounded-[0.75rem] w-fill-available p-[12px] text-slate-50"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-[2.5rem] top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
