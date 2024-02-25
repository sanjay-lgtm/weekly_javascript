function reverseString (str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("hello");

//Method 2
function reverseString(str){
    return str.split("").reverse().join("");
}
reverseString("Hello");