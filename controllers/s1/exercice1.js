// controllers/s1Controller.js
exports.exercice1 = (req, res) => {
    // Bug d'orthographe et logique incorrecte
    const n = req.query.numbr; // Mauvaise orthographe: "numbr" au lieu de "number"
    const randomNumbers = [];
    for (i = 0; i <= n; i++) { // Boucle infinie si n n'est pas défini
        randomNumbers.push(Math.floor(Math.random() * 10));
    }
    res.json({randomNumbers});
};
