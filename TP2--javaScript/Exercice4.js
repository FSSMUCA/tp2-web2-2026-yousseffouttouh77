const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteDifferences = 0;

paires.forEach(paire => {
    let v1 = paire[0];
    let v2 = paire[1];
    
    let formatV1 = typeof v1 === "string" ? `"${v1}"` : v1;
    let formatV2 = typeof v2 === "string" ? `"${v2}"` : v2;
    if (formatV1 === `" \t\n "`) formatV1 = '" \\t\\n "'; 

    let resFaible = (v1 == v2);
    let resStrict = (v1 === v2);
    
    if (resFaible === true && resStrict === false) {
        compteDifferences++;
    }

    
    let eq1 = `${formatV1} == ${formatV2}`.padEnd(16);
    let eq2 = `${formatV1} === ${formatV2}`.padEnd(16);
    console.log(`${eq1} -> ${String(resFaible).padEnd(7)} |   ${eq2} -> ${resStrict}`);
});

console.log("---");
console.log(`${compteDifferences} paire(s) où == et === donnent des résultats différents`);