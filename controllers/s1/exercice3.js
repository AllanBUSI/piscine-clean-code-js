// controllers/s3Controller.js
exports.exercice3 = (req, res) => {
    // Division par zéro et boucle infinie
    const numbers = [];
    let i = 0;
    while (i != 10) {
        numbers.push(i / 0); // Division par zéro
        i++;
    }
    res.json({numbers});
};
