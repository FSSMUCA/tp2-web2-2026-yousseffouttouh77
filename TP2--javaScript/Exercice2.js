let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    let affichage = String(val);
    
    if (val === "") {
        affichage = "(chaine vide)";
    } else if (typeof val === "object" && val !== null && !Array.isArray(val)) {
        affichage = "[object Object]";
    } else if (Array.isArray(val)) {
        affichage = ""; 
    }

    let etat = val ? "truthy" : "falsy";
    
    console.log(`${affichage} -> ${etat}`);
}