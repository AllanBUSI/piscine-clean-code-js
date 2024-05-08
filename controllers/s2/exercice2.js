// controllers/exercice2Controller.js
const users = [{ id: 1, name: 'John Doe' }]; // Fausses données

exports.getUser = (req, res) => {
    // Bug d'indexation et absence de validation
    const user = users[req.params.id];
    res.json({ user });
};
