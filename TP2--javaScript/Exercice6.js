let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const vars = { nom, age, ville, score, actif };

console.log("Partie A --- ??");
for (const [cle, val] of Object.entries(vars)) {
    console.log(`${cle} ?? "valeur par défaut"    -> ${val ?? "valeur par défaut"}`);
}

console.log("\nPartie B --- ||");
for (const [cle, val] of Object.entries(vars)) {
    console.log(`${cle} || "valeur par défaut"    -> ${val || "valeur par défaut"}`);
}

console.log("\nPartie C --- Comparaison");
for (const [cle, val] of Object.entries(vars)) {
    let resNullish = val ?? "valeur par défaut";
    let resOr = val || "valeur par défaut";
    let comparaison = (resNullish === resOr) ? "même résultat" : "résultat différent";
    console.log(`${cle.padEnd(5)} : ?? et || -> ${comparaison}`);
}