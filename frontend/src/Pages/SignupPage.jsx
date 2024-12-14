import { ArrowRight } from "lucide-react";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { StoreData } from "../Store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

const SignupPage = () => {
  const { setUser } = useContext(StoreData);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const baseUrl = import.meta.env.VITE_APP_API_URL;

  const signupMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data) => {
      const response = await axios.post(`${baseUrl}/api/auth/signup`, data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("skyworld", JSON.stringify(data.data));
      // console.log(data.data);
      setUser(data.data);
      queryClient.invalidateQueries(["user"]);
      window.location.reload();
      navigate("/");
    },
    onError: (err) => {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    signupMutation.mutate(formData);
  };

  return (
    <div className="min-h-[80vh] ">
      <div className="flex items-center gap-1  p-4 bg-gray-100">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-blue-400">Signup</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm p-8 rounded-xl">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
            Welcome, Please Create Your Account
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6 relative">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <div
                onClick={togglePassword}
                className="absolute right-4 top-[54px] text-lg transform -translate-y-1/2 text-black cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={signupMutation.isLoading}
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              {signupMutation.isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* Already have an account link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
