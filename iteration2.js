const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let larger=avengers[0];
    for (let index = 1; index < avengers.length; index++) {
        if (avengers[index].length>larger.length) {
            larger=avengers[index];
        }
        
    }
    return larger;
}
console.log(findLongestWord(avengers));