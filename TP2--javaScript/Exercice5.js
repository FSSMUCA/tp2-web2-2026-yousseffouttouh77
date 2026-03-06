let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

nombres.forEach(val => {
    let categorie = "";

    if (Number.isNaN(val)) {
        categorie = "INVALIDE";
    } else if (val === Infinity || val === -Infinity) {
        categorie = "INFINI";
    } else if (val === 0 && 1 / val === -Infinity) {
        categorie = "ZERO NEGATIF";
    } else if (Number.isSafeInteger(val)) {
        categorie = "ENTIER SUR";
    } else if (Number.isInteger(val)) {
        categorie = "ENTIER HORS LIMITES";
    } else {
        categorie = "DECIMAL";
    }

    console.log(`${val} -> ${categorie}`);
});