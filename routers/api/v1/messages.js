const express = require('express')
const router = express.Router()
const messagesController = require('../../../controllers/api/v1/messages')

router.get('/', messagesController.getAll);
router.get('/:id', messagesController.getMessageById);
router.post('/', messagesController.postMessage);
router.put('/:id', messagesController.updateMessage);
router.delete('/:id', messagesController.deleteMessage);
router.get('/:id', messagesController.getMessagebyUsername);

module.exports = router;