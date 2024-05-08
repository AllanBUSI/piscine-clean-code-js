// controllers/exercice5Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', age: 25, email: 'jane@example.com' }
]; // Fausses données

exports.getAllUsers = (req, res) => {
    // Utilisation incorrecte de map
    const usersList = users.map((user, index) => {
        return { id: index, name: user.name };
    });
    res.json({ usersList });
};
