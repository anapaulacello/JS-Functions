const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let larger=array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length>larger.length) {
            larger=array[i];
        }
        
    }
    return larger;
}
console.log(findLongestWord(avengers));