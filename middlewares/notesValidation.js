const { z } = require('zod')

// Reusable middleware generator
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
    req.body = result.data // Sanitized data
    next()
  }
}

const contentSchema = z.string()
  .trim()
  .min(2, 'Note content characters over the limit')
  .max(2000, 'Note content characters over the limit')
  .optional()

const typeSchema = z.enum(['Personal', 'Work'], {
  errorMap: () => ({ message: 'Invalid note type' })
})

// Create Note Schema
const createNoteSchema = z.object({
  title: z.string().min(2).max(100, 'Note title must be between 2 and 100 characters'),
  content: z.string().min(2).max(50).optional(),
  type: typeSchema 
})

// Update Note Schema
const updateNoteSchema = z.object({
  title: z.string().min(2).max(100).optional(),
  content: z.string().min(2).max(500).optional(),
})


// Export middlewares
exports.createNotesValidationRules = [validate(createNoteSchema)]
exports.updateNotesValidationRules = [validate(updateNoteSchema)]
