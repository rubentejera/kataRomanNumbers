export default function romanNumerals() {

    var numeral = function(value, numeral){
        return {value:value, numeral:numeral};
    };

    var numerals = [
        numeral(1000,"M"),
        numeral(900,"CM"),
        numeral(500,"D"),
        numeral(400,"CD"),
        numeral(100,"C"),
        numeral(90,"XC"),
        numeral(50,"L"),
        numeral(40,"XL"),
        numeral(10,"X"),
        numeral(5,"V"),
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