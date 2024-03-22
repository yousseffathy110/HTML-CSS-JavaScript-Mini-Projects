document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  const forgotPasswordLink = document.getElementById("forgotPassword");

  const fetchUserdata = () => {
    return fetch("http://api.com/yousef").then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user credentials");
      }
      return response.json();
    });
  };

  const fetchUserCredentials = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usersAndPasswords = {
          youseffathy: "password123",
          ahmedyousef: "leivnosein2022",
          ibrahim12: "frontend123",
        };
        resolve(usersAndPasswords);
      }, 1000);
    });
  };

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    authenticate(username, password);
  });

  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Forgot Password functionality is not implemented yet.");
  });

  const authenticate = async (username, password) => {
    try {
      const usersAndPasswords = await fetchUserCredentials();
      if (usersAndPasswords.hasOwnProperty(username)) {
        if (usersAndPasswords[username] === password) {
          window.location.href = "test.html";
        } else {
          errorMessage.textContent = "Invalid password";
        }
      } else {
        errorMessage.textContent = "Username not found";
      }
    } catch (error) {
      console.error("Error fetching user credentials:", error);
      errorMessage.textContent = "Error fetching user credentials";
    }
  };
});
