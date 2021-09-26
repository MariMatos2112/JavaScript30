// start with strings, numbers and booleans
console.groupCollapsed("%cStrings, numbers and booleans", "color: purple");
let string1 = "Natasha Romanoff";
console.log("string1 = 'Natasha Romanoff'");
let string2 = string1;
console.log("string2 = string1");
console.log(`string1 === string2: ${string1 === string2}`);
console.log("");

console.warn('Changing string1 to "Natalia Romanova" WILL NOT change string2');
string1 = "Natalia Romanova";
console.log("string1 = 'Natalia Romanova'");
console.log(`string1: ${string1}`);
console.log(`string2: ${string2}`);
console.log(
  "%cConclusion: They're COPIES, NOT REFERENCES.",
  "color: white; background: orange; font-weight: bold"
);
console.groupEnd("Strings, numbers and booleans");

// Let's say we have an array and we want to make a copy of it
console.groupCollapsed("%cArrays 1", "color: purple");
const heroes = ["Steve", "Tony", "Bruce", "Clint"];
console.log('heroes = ["Steve", "Tony", "Bruce", "Clint"]');
const heroes2 = heroes;
console.log("heroes2 = heroes");
console.log(`heroes === heroes2: ${heroes == heroes2}`);
console.log("");

console.warn('Changing heroes[0] to "Thor" WILL change heroes2');
heroes[0] = "Thor";
console.log('heroes[0] = "Thor"');
console.log(`heroes: ${heroes}`);
console.log(`heroes2: ${heroes2}`);
console.log(
  "%cConclusion: They're REFERENCES, NOT COPIES.",
  "color: white; background: orange; font-weight: bold"
);
console.groupEnd("Arrays 1");

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
console.groupCollapsed("%cArrays 2", "color: purple");
console.log("Copying arrays...");
console.log("%c1º way: Using slice", "font-weight: bold");
const heroesCopy1 = heroes.slice();
console.log(`heroesCopy1 = heroes.slice(): heroesCopy1 = ${heroesCopy1}`);

console.log(
  "%c2º way: Creating a new array and concatening the old one",
  "font-weight: bold"
);
const heroesCopy2 = [].concat(heroes);
console.log(`heroesCopy2 = [].concat(heroes): heroesCopy2 = ${heroesCopy2}`);

console.log("%c3º way: Using the new ES6 Spread", "font-weight: bold");
const heroesCopy3 = [...heroes];
console.log(`heroesCopy3 = [...heroes]: heroesCopy3 = ${heroesCopy3}`);

console.log("%c4º way: The last way", "font-weight: bold");
const heroesCopy4 = Array.from(heroes);
console.log(`heroesCopy4 = Array.from(heroes): heroesCopy4 = ${heroesCopy4}`);
console.groupEnd("Array 2");

// With Objects
console.groupCollapsed("%cObjects", "color: purple");

const scarletWitch = {
  name: "Wanda",
  lastname: "Maximoff",
  origin: "Sokovia",
};
console.log(`const scarletWitch = {
  name: "Wanda",
  lastname: "Maximoff",
  origin: "Sokovia",
};`);

const scarletWitchCopy = scarletWitch;
console.log("const scarletWitchCopy = scarletWitch;");
console.log("");

console.log(
  "%cConclusion: scarletWitch and scarletWitchCopy are REFERENCES. So, if you change one, you will change the other one.",
  "color: white; background: orange; font-weight: bold"
);

scarletWitch.lastname = "Django";
console.log('scarletWitch.lastname = "Django"');
console.log(`scarletWitch.lastname = ${scarletWitch.lastname}`);
console.log(`scarletWitchCopy.lastname = ${scarletWitchCopy.lastname}`);
console.log("");

console.warn("We need to make a copy then. We do this way:");
const scarletWitchCopy2 = Object.assign({}, scarletWitch, {
  nationality: "Sokovian",
});
console.log(
  `const scarletWitchCopy2 = Object.assign({}, scarletWitch, {nationality: 'Sokovian'})`
);
console.log(
  "%cDoing this way, we copied the object scarletWitch and added the atribute nationality",
  "font-weight: bold"
);
console.warn("Or this way:");
const scarletWitchCopy3 = JSON.parse(JSON.stringify(scarletWitch));
console.log('const scarletWitchCopy3 = JSON.parse(JSON.stringify(scarletWitch));')
console.log(
  "%cDoing this way, we just copied the object scarletWicth.",
  "font-weight: bold"
);

console.groupEnd("Objects");