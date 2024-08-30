const string = new String("malsın")
const string2 = "malsınxd"

// strings length
console.log(string.length)

// accessing char
console.log(string2[2])

// looping
for (let i = 0; i < string2.length; i++){
    console.log(string2[i])
}

// modifying strings (returns new string)
string[2] = "b" // cant do this
console.log(string2.replace("xd", "!!"))
// replace -> changes the first instance
// replaceAll -> changes all the instances of the char

console.log(string.concat("share my work"))

// aradakiler hariç baş ve sondaki boşlukları siler
const newStr = "     asdasdasd    asdasdasd     "
console.log(newStr.trim())

// searching
console.log(string2.indexOf("x"))
console.log(string2.indexOf("mal"))

// lastIndexOf()
// startsWith() -> bool
// endsWith() -> bool

// extracting substring
console.log(string2.substring(2))
console.log(string2.substring(2,5))

console.log(string2.slice(2, -2))

// converting case
const toBeConverted = 1
const toBeConverted2 = {name: "yiğit"}
console.log(String(toBeConverted))
console.log(JSON.stringify(toBeConverted2))

console.log(string.toLowerCase())
console.log(string.toUpperCase())

// includes
// split
// join

console.log(string.replace(string.slice(3), "..."))

const truncateStr = (str, maxLength) => {
    if(str.length > maxLength){
        return str.replace(str.slice(maxLength), "...")
    } else {
        return str
    }
}

console.log(truncateStr("roadside coder is my channel", 100))