import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-80 h-10 rounded-lg px-4 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-80 h-10 rounded-lg px-4 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
