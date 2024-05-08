// controllers/s8Controller.js
exports.exercice8 = (req, res) => {
    // Utilisation incorrecte d'une variable globale
    globalNum += 10; // globalNum n'est pas défini
    res.json({ globalNum });
};
