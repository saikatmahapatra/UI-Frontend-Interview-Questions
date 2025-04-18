function findVowels(str) {
    const listOfVowels = ['a', 'e', 'i', 'o', 'u'];
    const splittedStr = str.split('');
    const vowelFound = [];
    let uniqueVowelFound = new Set();
    if (splittedStr && splittedStr.length > 0) {
        splittedStr.forEach((char) => {
            const checkChar = char ? char.toLowerCase() : '';
            console.log(char + ' is vowel => ', listOfVowels.includes(checkChar));
            if (listOfVowels.includes(checkChar)) {
                vowelFound.push(char);
            }
        });
    }
    console.log("Vowels found in " + str + " is/are ", vowelFound.join(','));
    uniqueVowelFound = new Set(vowelFound);
    console.log("Unique Vowels found in " + str + " is/are ", Array.from(uniqueVowelFound));
}


findVowels("Saikat Mahapatra");
//https://jsfiddle.net/saikatmahapatra/ycLpf6k3/18/