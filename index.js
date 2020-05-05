const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//TO-DO:
// GET: /
// Toont een eenvoudige homepage (tip: jade)

// GET: /api/v1/messages
// (met mongoDb) Geeft messages terug 
// (zonder mongoDb) Response kan zijn : { “message”: “GETTING messages” }
app.get('/api/v1/messages', function(req, res){
res.send('message: GETTING messages');
});
// GET: /api/v1/messages/:id
// (met mongoDb) Geeft message met specifiek id terug
// (zonder mongoDb) Response kan zijn : { “message”: “GETTING message with ID id” }
// POST: /api/v1/messages
// (met mongoDb) Kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
// Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
// (zonder mongoDb) Response kan zijn: {“message”: “POSTING a new message for user Pikachu”}
// Zorg dat je de naam dynamisch kan invullen en in het antwoord teruggeeft
// PUT: /api/v1/messages/:id
// (met mongoDb) Kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
// (zonder MongoDb) Response kan zijn: {“message”: “UPDATING a message with id id”}
// DELETE: /api/v1/messages/:id
// (met mongoDb) Kan een message met id verwijderen en geeft een response terug {“status”: “success”, “message”: “The message was removed”}
// (zonder mongoDb) Response kan zij: {“message”: “DELETING a message with id id”}
// GET: /api/v1/messages?user=username
// (met mongoDb) Kan berichten teruggeven voor een bepaalde username
// Tip: req.params.username
// (zonder mongoDb) Response kan zijn: {“message”: “GETTING message for username username”}