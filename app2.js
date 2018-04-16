
function convert_num_to_words(number) {

    // First 19 numbers //English
    let digits = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    let teens = ['ten', 'eleven',
     'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

     // Decenas
    let decens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety'];

    // Hundred
    let hundred = ['hundred'];

    // Thousand
    let thousand = ['thousand'];

    let stringed = number + "";

    if (stringed.length === 1){
        return digits[number];
    }

    if (stringed.length === 2){
        if (stringed[0] === '1'){
            return teens[number];
        }else{
            decens.map((x, i, a) => {
                if ((i+1).toString() === stringed[0]){
                    return x;
                }
            });

            stringed[1]
        }
    }

    stringed.split("").reduce( (a,n) => {
        
    


    }, "");





}

convert_num_to_words(8);
convert_num_to_words(35);
convert_num_to_words(120);
convert_num_to_words(2120);