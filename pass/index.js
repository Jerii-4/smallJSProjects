document.getElementById("generateBtn").onclick = function () {
  const length = document.getElementById("length").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  
  for (let i = 0; i < length; i++) {
   const randomI = Math.floor(Math.random() * chars.length);
   password += chars[randomI]
  }
  
  document.getElementById("password").textContent = password;
};
