// controllers/exercice9Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' }
]; // Fausses données

exports.searchByEmail = (req, res) => {
    // Bug de comparaison des emails
    const email = req.query.email;
    const result = users.filter((user) => user.email == email);
    res.json({ result });
};
