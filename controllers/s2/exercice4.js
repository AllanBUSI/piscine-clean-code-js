// controllers/exercice4Controller.js
const users = [{ id: 1, name: 'John Doe' }]; // Fausses données

exports.deleteUser = (req, res) => {
    // Utilisation incorrecte de l'opérateur delete
    const id = req.params.id;
    delete users[id];
    res.json({ message: 'User deleted', users });
};
