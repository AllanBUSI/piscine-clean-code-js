// controllers/exercice10Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' }
]; // Fausses données

exports.deleteMultipleUsers = (req, res) => {
    // Suppression incorrecte de plusieurs utilisateurs
    const ids = req.query.ids.split(',');
    ids.forEach((id) => {
        delete users[id];
    });
    res.json({ message: 'Multiple users deleted', users });
};
