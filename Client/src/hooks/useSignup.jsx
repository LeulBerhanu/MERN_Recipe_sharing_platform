import { useState } from "react";
import axios from "axios";
import { login } from "../Redux/features/auth/authUserSlice";
import { useDispatch } from "react-redux";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const dispatch = useDispatch();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/user/",
        {
          ...data,
        }
      );

      //   save user to localstorage
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response);

      const payload = response.data;
      //   update the auth
      dispatch(login(payload));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        // The request was made, but the server responded with an error
        setError(error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred while sending the request");
      }
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
