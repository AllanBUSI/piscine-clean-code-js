// controllers/exercice1Controller.js
const users = [{ id: 1, name: 'John Doe' }]; // Fausses données

exports.createUser = (req, res) => {
    // Mauvaise logique et absence de validation
    const user = { id: 2, name: req.query.name || 'Jane Doe' };
    users.push(user);
    res.json({ message: 'User created', user });
};
