const express = require('express')
const router = express.Router()

const NotesController = require('../controllers/NotesController')
const authMiddleware = require('../middlewares/authenticate')
const {
  createNotesValidationRules,
  updateNotesValidationRules,
} = require('../middlewares/notesValidation')

const notesController = new NotesController()

// Apply auth middleware to all routes
router.use(authMiddleware);

router.get('/search', notesController.searchNotesByKeyword.bind(notesController));

// Route handlers
router.get('/', notesController.getAllUserNotes.bind(NotesController))
router.get('/:noteId', notesController.getNoteById.bind(NotesController))
router.post('/', createNotesValidationRules, notesController.createNewNote.bind(NotesController))
router.put('/:noteId', updateNotesValidationRules, notesController.updateNote.bind(NotesController))
router.delete('/:noteId', notesController.deleteNote.bind(NotesController))

module.exports = router
