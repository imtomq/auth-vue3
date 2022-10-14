export function isLoggedIn() {
  const accessToken = localStorage.getItem("access-token");
  if (accessToken) return true;
  return false;
}

export function expiredToken() {
  const expirationTime = 1000 * 60 * 1;
  setTimeout(() => {
    localStorage.clear();
  }, expirationTime);
}
