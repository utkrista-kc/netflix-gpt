import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/ae9edb00-3442-4d8c-9e33-ead86efa6eb6/AU-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bck"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="py-2 my-4 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
