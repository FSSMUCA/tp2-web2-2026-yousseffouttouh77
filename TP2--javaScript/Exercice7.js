let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null; 
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

console.log("Calcul en cours...");

let sousTotal = prix * quantite;
let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
let total = sousTotal - reduction;

let statutPaiement = (soldeCompte >= total) ? "Paiement accepté" : "Solde insuffisant";
let nouveauSolde = soldeCompte;

if (statutPaiement === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
}

console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${total} MAD`);
console.log(`Statut    : ${statutPaiement}`);
console.log(`Solde     : ${nouveauSolde} MAD`);
console.log("=========================");