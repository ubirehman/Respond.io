const { z } = require('zod')

// Reusable validation middleware
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(422).json({
        errors: result.error.errors.map((err) => ({
          msg: err.message,
          path: err.path.join('.'),
        })),
      })
    }
    req.body = result.data // Sanitized and validated data
    next()
  }
}

// Signup schema
const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
})

// Login schema (same as signup)
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
})

// Exported middleware
exports.validateSignup = [validate(signupSchema)]
exports.validateLogin = [validate(loginSchema)]
