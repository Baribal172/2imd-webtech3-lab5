const Message = require("../../../models/messages");

// GET: /api/v1/messages
// (met mongoDb) Geeft messages terug
const getAll = function (req, res) {
	Message.find(
		{
			user: "Vincent",
		},
		(err, docs) => {
			if (!err) {
				res.json({
					status: "success",
					data: {
						message: docs,
					},
				});
			}
		}
	);
};
// GET: /api/v1/messages/:id
// (met mongoDb) Geeft message met specifiek id terug
const getMessageById = function (req, res) {
	Message.find(
		{
			_id: req.params.id,
		},
		(err, docs) => {
			if (!err) {
				res.json({
					status: "success",
					data: {
						message: docs,
					},
				});
			}
		}
	);
};
// POST: /api/v1/messages
// (met mongoDb) Kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
// Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
const postMessage = function (req, res) {
	let message = new Message();
	message.text = req.body.text;
	message.user = req.body.user;
	message.save((err, docs) => {
		if (!err) {
			res.json({
				status: "success",
				data: {
					message: docs,
				},
			});
		}

		if (err) {
			res.json({
				status: "error",
				message: "Could not save this message",
			});
		}
	});
};
// PUT: /api/v1/messages/:id
// (met mongoDb) Kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
const updateMessage = function (req, res) {
	res.send("message”: “UPDATING a message with id id");
};
// DELETE: /api/v1/messages/:id
// (met mongoDb) Kan een message met id verwijderen en geeft een response terug {“status”: “success”, “message”: “The message was removed”}
const deleteMessage = function (req, res) {
	res.send("message”: “DELETING a message with id id");
};
// GET: /api/v1/messages?user=username
// (met mongoDb) Kan berichten teruggeven voor een bepaalde username
// Tip: req.params.username
const getMessagebyUsername = function (req, res) {
	res.send("message”: “GETTING message for username username");
};
module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.postMessage = postMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessagebyUsername = getMessagebyUsername;
