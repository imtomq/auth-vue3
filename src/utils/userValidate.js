export function userValidate(email, password) {
  setTimeout(() => {
    if (email !== 'nguyenquyen@gmail.com') return false;
    if (password !== '0000') return false;
    return true;
  }, 1500);
}
