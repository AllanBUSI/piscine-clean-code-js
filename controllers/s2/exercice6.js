// controllers/exercice6Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' }
]; // Fausses données

exports.updateAge = (req, res) => {
    // Mise à jour incorrecte de l'âge
    const id = parseInt(req.params.id);
    const age = parseInt(req.query.age);
    users[id].age = age;
    res.json({ message: 'Age updated', user: users[id] });
};
