// controllers/s2Controller.js
exports.exercice2 = (req, res) => {
    // Utilisation incorrecte du modulo
    const numbers = [];
    for (let i = 0; i < 20; i++) {
        numbers.push(i % 0); // Modulo par zéro
    }
    res.json({numbers});
};
