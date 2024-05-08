// controllers/s7Controller.js
exports.exercice7 = (req, res) => {
    // Syntaxe incorrecte dans un switch-case
    let color = req.query.color;
    switch (color) {
        case 'red'
            res.json({ message: 'Color is red' }); // Manque un deux-points
            break;
        case 'green':
            res.json({ message: 'Color is green' });
            break;
        default:
            res.json({ message: 'Color not found' });
    }
};
