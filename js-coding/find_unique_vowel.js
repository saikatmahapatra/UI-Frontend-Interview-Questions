function findVowels(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const splittedInputStr = inputString.split('');
    const vowelFound = [];
    let uniqueVowelFound = new Set();

    if (splittedInputStr && splittedInputStr.length > 0) {
        splittedInputStr.forEach((char) => {
            const checkChar = char ? char.toLowerCase() : '';
            console.log(char + ' is vowel => ', vowels.includes(checkChar));
            if (vowels.includes(checkChar)) {
                vowelFound.push(char);
            }
        });
    }
    console.log("Vowels found in " + inputString + " is/are ", vowelFound.join(','));
    uniqueVowelFound = new Set(vowelFound);
    console.log("Unique Vowels found in " + inputString + " is/are ", Array.from(uniqueVowelFound));
}


findVowels("Saikat Mahapatra");
//https://jsfiddle.net/saikatmahapatra/ycLpf6k3/18/

/*for (let char of inputString) {
    if (vowels.includes(char)) {
        result.push(char);
    }
}*/