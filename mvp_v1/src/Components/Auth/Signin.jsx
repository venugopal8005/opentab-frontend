import React, { useState } from "react";
import Squares from "@/backgrounds&effects/Squares";
import Header from "@/backgrounds&effects/Header";
import { Link } from "react-router-dom";
// import { authStart, authFailure, authSuccess } from "@/Features/Auth/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const { isAuthenticated, user, status, error } = useSelector(
    (state) => state.user
  );
  const handleSignin = (e) => {
    e.preventDefault();
    // dispatch(authStart({}));

    // // mock backend
    // setTimeout(() => {
    //   dispatch(authSuccess());
    // }, 800);
  };

  // redirect after login
  if (isAuthenticated) {
    navigate("/app/myspace/dashboard");
  }

  const togglePassword = () => setShowPassword((s) => !s);

  return (
    <>
      <div className="h-[100svh] w-full">
        <div className="h-[100svh] w-full bg-gradient-to-b from-black to-[#1E1E1F] absolute ">
          <Squares
            speed={0.2}
            squareSize={35}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#1E1E1F"
            hoverFillColor="black"
          />
        </div>
        <Header />
        <div className="h-[100svh] w-full absolute flex justify-center items-center">
          <div className="md:w-[500px] sm:max-w-2xl rounded-2xl  backdrop-blur-sm border-[#1F1F1F] border-2 shadow-2xl p-10 sm:p-12 text-white">
            {/* Header */}
            <form action="" onSubmit={handleSignin}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold">Welcome Back</h2>
                <p className="text-sm text-neutral-400 mt-2">
                  let’s get started with OpenTab
                </p>
              </div>
              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm text-neutral-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    required
                    className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-shadow"
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-5">
                <label className="block text-sm text-neutral-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-shadow"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    aria-pressed={showPassword}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-white text-sm flex items-center justify-center"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline-block"
                      >
                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3-11-8 1.02-2.6 2.63-4.78 4.6-6.15" />
                        <path d="M1 1l22 22" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline-block"
                      >
                        <path d="M1.05 12C2.73 7 7 4 12 4s9.27 3 10.95 8c-1.68 5-6.95 8-10.95 8s-9.27-3-10.95-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Options */}
              <div className="flex items-center justify-between text-sm mb-6">
                <label className="flex items-center gap-2 text-neutral-400">
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    defaultChecked
                  />
                  Keep me logged in
                </label>
                <button className="text-blue-500 hover:underline">
                  Forgot Password?
                </button>
              </div>
              {/* Primary Button */}
              <button
                className="w-full rounded-xl bg-[#4080EE] hover:to-indigo-600 transition transform hover:-translate-y-0.5 shadow-lg py-3.5 font-Medium mb-6"
                type="submit"
              >
                Log in
              </button>
              {/* Divider */}
              <div className="flex items-center gap-3 text-neutral-500 text-sm mb-6">
                <div className="h-px bg-neutral-700 flex-1" />
                Or continue with
                <div className="h-px bg-neutral-700 flex-1" />
              </div>
              {/* Social buttons */}
              <div className="flex justify-center gap-4 mb-6">
                {["G", "X", "f"].map((icon, i) => (
                  <button
                    key={i}
                    className="h-11 w-11 rounded-xl bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition flex items-center justify-center"
                  >
                    {icon}
                  </button>
                ))}
              </div>
              {/* Footer */}
              <p className="text-center text-sm text-neutral-400">
                New here?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </p>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
