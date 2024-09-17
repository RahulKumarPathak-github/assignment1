
function login(username, password) {
    return (username === "admin" && password === "12345") 
      ? "Login successful" 
      : "Invalid credentials";
  }
  
  // Example usage
  console.log(login("admin", "12345"));  // Output: Login successful
  console.log(login("user", "12345"));   // Output: Invalid credentials
  console.log(login("admin", "54321"));  // Output: Invalid credentials