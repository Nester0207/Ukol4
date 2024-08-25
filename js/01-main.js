function nahodnyLetopocet(argPrvniCislo, argDreheCislo) {
    let pocetMeziCisel = argDreheCislo - argPrvniCislo;
    let vysledek = (Math.floor(Math.random() * pocetMeziCisel) + argPrvniCislo);

    return vysledek;
}

let odpovedUzivatele = +(prompt("Kolik nahodnych letopoctu se mam vypsat do konzole?"));
let counter = 0;
while(counter < odpovedUzivatele) {
    console.log(nahodnyLetopocet(1992, 2050));

    counter++;
}