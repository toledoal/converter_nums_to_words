
function convert_num_to_words(number) {

    // First 19 numbers //English
    let digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    let teens = ['ten', 'eleven',
     'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

     // Decenas
    let decens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety'];

    // More...
    let miles = ['hundred', 'thousand', 'hundred thousand', 'millon'];

    let stringed = number + "";

    if (stringed.length === 1){
        return number === 0 ? '' : digits[number - 1];
    }

    if (stringed.length === 2){
        if (stringed[0] === '1'){
            return teens[stringed[1]];
        }else{
            return decens[stringed[0] - 2] + ' ' + convert_num_to_words(parseInt(stringed[1]))        
        }
        }
    
    if (stringed.length === 3){
        let quantity = stringed.substr(1);
       return convert_num_to_words(parseInt(stringed[0])) + ' ' + miles[0] + ' ' + convert_num_to_words(quantity);
    }

    if (stringed.length === 4){
        let quantity = stringed.substr(1);
       return convert_num_to_words(parseInt(stringed[0])) + ' ' + miles[1] + ' ' + convert_num_to_words(quantity);
    }

}

console.log(convert_num_to_words(0));
console.log(convert_num_to_words(7));
console.log(convert_num_to_words(18));
console.log(convert_num_to_words(78));
console.log(convert_num_to_words(120));
console.log(convert_num_to_words(2120));
