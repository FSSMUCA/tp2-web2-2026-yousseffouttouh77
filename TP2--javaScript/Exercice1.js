let a = 42;
let b = "Bonjour";
let c = true;
let d = null;
let e ;
let f = [1, 2, 3];
let g = { nom: "Ali" };
let h = NaN;

const variables = [a, b, c, d, e, f, g, h];

variables.forEach(val => {
    let affichage = val;
    if (Array.isArray(val)) {
        affichage = `[${val}]`;
    } else if (typeof val === "object" && val !== null) {
        affichage = "[object Object]";
    }
    
    console.log(`${affichage} -> ${typeof val}`);
});