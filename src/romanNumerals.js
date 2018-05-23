function romanNumerals() {

    var numerals = [
        {value:4, numeral:"IV"},
        {value:1, numeral:"I"},
    ];

    function fromNumber(number) {
        var result = "";
        numerals.forEach(function (item) {
            while (number >= item.value) {
                result += item.numeral;
                number -= item.value;
            }
        });
        return result;
    };


    return {
        fromNumber,
    }
}

module.exports = romanNumerals;