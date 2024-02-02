class UserService {
  async registerUser(userData) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }
}

const userService = new UserService();
export default userService;
