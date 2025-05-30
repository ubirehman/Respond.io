const jwt = require('jsonwebtoken')
const UserService = require('../services/UserService'); // Replace the path with the correct location of your UserService.js file
const logger = require('../utils/logger');
const userService = new UserService()

/**
 * The UserController class handles user signup and login functionality.
 * It interacts with the UserService class to perform user-related operations.
 */
class UserController {
  /**
   * Handles user signup.
   * 
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response object with token and user data.
   */
  async signup(req, res) {
    try {
      const { email, password } = req.body;

      // Check if the user already exists
      const existingUser = await userService.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = await userService.createUser({ email, password });

      // Generate JWT token
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET_KEY);

      // Respond with the token and user data
      res.json({ token, user: newUser });
    } catch (error) {
      logger.error('Error during sign up:', error);
      res.status(500).json({ message: 'Sign up failed' });
    }
  }

  /**
   * Handles user login.
   * 
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response object with token and user data.
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await userService.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Verify the password
      const validatedUser = await userService.verifyUserPassword(user, password);
      if (!validatedUser) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);

      // Respond with the token and user data
      res.json({ token, user });
    } catch (error) {
      logger.error('Error during login:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  }
}

module.exports = UserController