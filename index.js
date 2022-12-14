// Code your solutions in this file
function writeCards(name, event) {
    let newName = [];
    for(let i=0; i<name.length; i++) {
        let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        newName.push(message);
    }
    return newName
}
function countDown(num){
    for(let i=num ; i>=0; i--){
        console.log(i);
    }
}
console.log(countDown(10));