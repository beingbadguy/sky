import React, { useState, useEffect, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query"; // Import hooks
import axios from "axios";
import { StoreData } from "../Store/StoreContext";

const LoginPage = () => {
  const { user } = useContext(StoreData);
  console.log(user);
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // Initialize useQueryClient

  const baseUrl = import.meta.env.VITE_APP_API_URL; // Ensure .env file is properly set up
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(""); // Add error state

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      setLoading(true);
      try {
        const response = await axios.post(`${baseUrl}/api/auth/login`, data, {
          withCredentials: true,
        });

        // Debugging the response
        console.log("Response data:", response.data);

        // Store token and navigate after successful login
        localStorage.setItem("skyworld", JSON.stringify(response.data.data));
        queryClient.setQueryData(["user"], response.data.user);
        navigate("/");
        window.location.reload(); // Reload page to reset state

        setLoading(false);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        setError(err.response?.data?.message || "An error occurred.");
        setLoading(false);
      }
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      console.error("Please enter all the fields");
    } else {
      loginUser.mutate(formData);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [queryClient, navigate, user]);

  return (
    <div className="min-h-[80vh]">
      <div className="flex items-center gap-1 p-4 bg-gray-100">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-blue-400">Login</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm p-8 rounded-xl">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
            Welcome Back, Please Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
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
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              Forgot your password?
            </a>
          </div>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
