function anagramFun(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    let result = (str1 === str2);
    return result;
}
console.log(anagramFun("listen", "silent"));

//Method 2--------->

function anagramFun(a, b) {
    return (a.split('').sort().join('')) === (b.split('').sort().join(''));
}
console.log(anagramFun("tea", "eat"));