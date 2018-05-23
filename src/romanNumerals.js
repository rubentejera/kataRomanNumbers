function romanNumerals() {
    function fromNumber(number) {
        var result = "";
        while (number > 0) {
            result += "I";
            --number;
        }
        return result;
    }


    return {
        fromNumber,
    }
}

module.exports = romanNumerals;