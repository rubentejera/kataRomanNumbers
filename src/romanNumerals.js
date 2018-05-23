export default function romanNumerals(){

        var numerals = [
            {value: 4, numeral: "IV"},
            {value: 1, numeral: "I"},
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