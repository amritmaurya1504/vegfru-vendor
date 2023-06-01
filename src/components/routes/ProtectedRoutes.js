import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthenticated } from "../../utils/auth";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/"); // Redirect to the login page
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
