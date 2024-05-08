// controllers/exercice3Controller.js
const users = [{ id: 1, name: 'John Doe' }]; // Fausses données

exports.updateUser = (req, res) => {
    // Bug d'indexation et absence de validation
    const id = parseInt(req.params.id);
    users[id].name = req.query.name || 'Default Name';
    res.json({ message: 'User updated', user: users[id] });
};
