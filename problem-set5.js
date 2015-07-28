// var alphabetSoup = function(string){
// 	return string.split('').sort().join('')
// }
// console.log(alphabetSoup('hello'))

var vowelCount = function(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var count = 0;
    for(var i = 0; i < string.length; i++) {
        for(var j = 0; j < vowels.length; j++) {
            if(string[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(vowelCount('hello'))