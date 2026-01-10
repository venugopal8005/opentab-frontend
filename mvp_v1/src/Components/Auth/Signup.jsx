import React, { useState } from "react";
import Squares from "@/backgrounds&effects/Squares";
import Header from "@/backgrounds&effects/Header";
import { Link } from "react-router-dom";
// import { authStart, authFailure, authSuccess } from "@/Features/Auth/UserSlice";
import { signup } from "@/Features/Auth/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [displayname, setdisplayname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isAuthenticated, user, status, error } = useSelector(
    (state) => state.user
  );

  const togglePassword = () => setShowPassword((s) => !s);

  //handle register
  const handleSignup = (e) => {
    e.preventDefault();

   
    dispatch(signup(
      {
       email : email,
       password : password,
       displayName : displayname

      }
    ));
  };

  // redirect after login
  if (isAuthenticated) {
    navigate("/app/myspace/dashboard");
  }

  return (
    <>
      <div className="h-[100svh] w-full">
        <div className="h-[100svh] w-full bg-gradient-to-b from-black to-[#1E1E1F] absolute ">
          <Squares
            speed={0.2}
            squareSize={35}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#1E1E1F"
            hoverFillColor="#00000000"
          />
        </div>
        <Header />
        <div className="h-[100svh] w-full absolute flex justify-center items-center">
          <div className="md:w-[500px] sm:max-w-2xl rounded-2xl  backdrop-blur-sm border-[#1F1F1F] border-2 shadow-2xl p-10 sm:p-12 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold">Welcome aboard</h2>
              <p className="text-sm text-neutral-400 mt-2">
                let’s get started with OpenTab
              </p>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
              />
            </div>

            {/* Display Name */}
            <div className="mb-5">
              <label className="block text-sm text-neutral-300 mb-2">
                Display Name
              </label>
              <input
                type="text"
                placeholder="James Roger"
                value={displayname}
                onChange={(e) => setdisplayname(e.target.value)}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
              />
            </div>

            {/* College Name */}
            {/* <div className="mb-5">
            <label className="block text-sm text-neutral-300 mb-2">
              College Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Oxford College"
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 pr-10 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                🔍
              </span>
            </div>
          </div> */}

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm text-neutral-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 pr-10 text-sm placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-white"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Primary Button */}
            <button
              className="w-full rounded-xl bg-[#0c13e6] hover:bg-[#4F5EFF] transition shadow-lg py-3.5 font-Medium mb-6"
              onClick={handleSignup}
            >
              {status === "loading" ? "Creating account..." : "Get Started"}
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
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
