import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-[#1C1C1C] w-[35%] h-[35%] border-green-400 px-2 py-2.5 rounded-lg flex items-center justify-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-[90%] flex flex-col items-center justify-center " >
            <div className="w-[95%] py-2 mb-5">
              <h1 className="text-3xl font-medium">Login Page :</h1>
            </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-md py-1 px-2 w-[95%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-md py-1 px-2 w-[95%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
            type="password"
            placeholder="Enter Password"
          />
          <button className="w-[95%] m-2 px-4 py-2 font-semibold bg-green-400 rounded-md text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
