export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const setTheme = (theme: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};