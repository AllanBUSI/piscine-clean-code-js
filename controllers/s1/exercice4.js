// controllers/s4Controller.js
exports.exercice4 = (req, res) => {
    // Fonction anonyme incorrecte
    (function anonymous {
        return { hello: "world" }; // Syntaxe incorrecte
    })();

    res.json({ message: "Cette route ne fait rien d'utile" });
};
