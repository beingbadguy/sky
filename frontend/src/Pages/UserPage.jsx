import React, { useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import { StoreData } from "../Store/StoreContext";

const UserPage = () => {
  const { user } = useContext(StoreData); // Get user data from context
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_APP_API_URL;

  // React Query Mutation for logout
  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      return await axios.post(`${baseUrl}/api/auth/logout`);
    },
    onSuccess: () => {
      localStorage.removeItem("skyworld");
      window.location.reload();
      navigate("/"); // Redirect to home after successful logout
    },
    onError: (error) => {
      console.error("Logout error: ", error.message); // Handle logout errors if needed
    },
  });

  // Ensure the user is logged in or navigate away
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-[80vh] mt-16 sm:mt-0 mb-10">
      {user ? (
        <div className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="font-bold text-xl sm:text-2xl flex gap-1 items-center">
                {user.name} {/* Display the user's name */}
              </div>
              <p className="text-sm sm:text-md">{user.email}</p>{" "}
              {/* Display the user's email */}
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  logoutMutation.mutate();
                }
              }}
              className="flex items-center gap-2 rounded-full p-2 bg-gray-200 hover:bg-red-200 hover:text-red-500"
            >
              {logoutMutation.isLoading ? (
                <TailSpin height="25" width="25" color="white" />
              ) : (
                <CiLogout />
              )}
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Show loading until user data is available
      )}
    </div>
  );
};

export default UserPage;
