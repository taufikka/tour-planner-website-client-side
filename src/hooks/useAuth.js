import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

// context hook
const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;