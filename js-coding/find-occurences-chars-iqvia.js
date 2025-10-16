/**
 * Find occurence of characters in a string and print them in descending order of their occurence.
 * str = 'neeraj is a good javascript developer'
 * expected output: 5e,4a,3or,2dijpsv,1cglnt
 * 
 */


function countOccurrences() {
    let str = 'neeraj is a good javascript developer';
    // expected output: 5e,4a,3or,2dijpsv,1cglnt

    // Count occurrences of each character
    let counts = {};
    for (let char of str.replace(/ /g, '')) {
      counts[char] = (counts[char] || 0) + 1;
    }
    //n:1, e:5, r:3, a:4, j:2, i:2, s:2, g:2, o:3, d:2, t:1, v:1, l:1, p:1, c:1

    // Group characters by their count
    let groups = {};
    for (let char in counts) {
      let count = counts[char];
      if (!groups[count]) groups[count] = [];
      groups[count].push(char);
    }
    // groups = { '1': ['n', 't', 'v', 'l', 'p', 'c'], '2': ['j', 'i', 's', 'g', 'd'], '3': ['r', 'o'], '4': ['a'], '5': ['e'] }

    // Sort groups by count descending, and characters alphabetically
    let result = Object.keys(groups)
      .sort((a, b) => Number(b) - Number(a))
      .map(count => `${count}${groups[Number(count)].sort().join('')}`)
      .join(',');

    console.log(result); // Output: 5e,4a,3or,2dijpsv,1cglnt
  }