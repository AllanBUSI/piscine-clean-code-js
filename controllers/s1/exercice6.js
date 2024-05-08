// controllers/s6Controller.js
exports.exercice6 = (req, res) => {
    // Double déclaration de variables
    let x = 10;
    let x = 20; // Double déclaration de "x"
    res.json({x});
};
