// controllers/exercice8Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' }
]; // Fausses données

exports.deleteByName = (req, res) => {
    // Bug lors de la suppression par nom
    const name = req.params.name;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users.splice(i, 1);
        }
    }
    res.json({ message: `User with name ${name} deleted`, users });
};
