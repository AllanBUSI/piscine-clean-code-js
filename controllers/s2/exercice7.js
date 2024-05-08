// controllers/exercice7Controller.js
const users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' }
]; // Fausses données

exports.getEmails = (req, res) => {
    // Tentative d'accéder à un champ inexistant
    const emails = users.map((user) => user.mail);
    res.json({ emails });
};
