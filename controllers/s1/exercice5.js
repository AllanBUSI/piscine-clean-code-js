// controllers/s5Controller.js
exports.exercice5 = (req, res) => {
    // Fonction non définie appelée
    const result = nonDefinedFunction(); // nonDefinedFunction n'existe pas
    res.json({ result });
};
