export default function romanNumerals() {

    var numeral = function(value, numeral){
        return {value:value, numeral:numeral};
    };

    var numerals = [
        numeral(4,"IV"),
        numeral(1,"I")
    ];

    function fromNumber(number) {
        var result = "";
        numerals.forEach(function (item) {
            for (; number >= item.value; number -= item.value) {
                result += item.numeral;
            }

        });
        return result;
    };


    return {
        fromNumber,
    }
}