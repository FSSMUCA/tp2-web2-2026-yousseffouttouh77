let nomUser = "   Fatima   ";
let ageUser = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");
let nomTraite = nomUser.trim() || "Inconnu";
console.log(`nom              : "${nomTraite}" (corrigé : espaces supprimés)`);

let ageTraite = parseInt(ageUser);
let statutAge = (Number.isNaN(ageTraite) || ageTraite <= 0) ? "invalide" : "valide";
console.log(`age              : ${ageTraite} (${statutAge})`);

let indexArobase = email.indexOf("@");
let indexPoint = email.indexOf(".", indexArobase); 
let statutEmail = (indexArobase !== -1 && indexPoint > indexArobase) ? "valide" : "invalide : pas de point après @";
console.log(`email            : "${email}" (${statutEmail})`);

let scoreTraite = parseInt(scoreJeu);
if (Number.isNaN(scoreTraite)) scoreTraite = 0;
console.log(`scoreJeu         : ${scoreTraite} (extrait depuis "${scoreJeu}")`);

let adminTraite = (estAdmin === "true");
console.log(`estAdmin         : ${adminTraite} (attention : Boolean("false") = true, conversion manuelle requise)`);

let derniereCoTraitee = derniereConnexion ?? "Jamais connecté";
console.log(`derniereConnexion: "${derniereCoTraitee}" (valeur par défaut via ??)`);


let connexionsTraitees = Number(nombreConnexions);
let affichageConnexions = connexionsTraitees === 0 ? "Aucune connexion" : connexionsTraitees;
console.log(`nombreConnexions : "${affichageConnexions}" (0 après conversion)`);

console.log("================================");