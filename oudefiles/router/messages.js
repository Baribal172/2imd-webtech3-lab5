const express = require("express");
const router = express.Router();
const messagesController = require("../controller/messages");

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getMessageById);
router.post("/", messagesController.postMessage);
router.put("/:id", messagesController.updateMessage);
router.delete("/:id", messagesController.deleteMessage);
router.get("/:id", messagesController.getMessagebyUsername);

module.exports = router;
