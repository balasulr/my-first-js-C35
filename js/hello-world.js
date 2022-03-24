// function oldFunction() {
//     console.log("The old function");
// }

// let newerFunction = function() {
//     console.log("The newer function")
// }

// const newestFunction = () => {
//     console.log("The newest function");
// }

// newestFunction();

// const add1 = (nbr) => {
//     console.log(`The result of nbr is ${nbr + 1}`);
// }

// add1(7);
// add1("7");
// add1(true);
// add1(["a", "b", "c"]);

console.log("The script is being loaded");

const loaded = (msg) => {
    console.log(`The HTML is loaded. Msg is ${msg}`);
    let inputCtrl = document.getElementById("inp");
    inputCtrl.value = msg;
}

console.log("The script has been loaded");