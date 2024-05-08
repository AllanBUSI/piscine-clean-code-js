// controllers/s9Controller.js
exports.exercice9 = (req, res) => {
    // Mauvais usage des callbacks
    const data = [1, 2, 3];
    data.map((num) => {
        res.json({num}); // Génère plusieurs réponses
    });
};
