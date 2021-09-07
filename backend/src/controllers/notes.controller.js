const notesCtrl = {};


notesCtrl.getNotes = (req, res) => res.json({message: []})

notesCtrl.createNote = (req, res) => res.json({message: 'Note created'})

notesCtrl.getNote = (req, res) => res.json({message: 'id Note'})

notesCtrl.updateNote = (req, res) => res.json({message: 'Note update'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note deleted'})

module.exports = notesCtrl;