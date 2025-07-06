export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const login = (token, username) => {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};
