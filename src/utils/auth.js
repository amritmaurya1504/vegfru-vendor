// Retrieve the token from local storage
export const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getToken();

  // Perform any necessary validation on the token here
  return token !== null;
};
