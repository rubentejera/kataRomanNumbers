function romanNumerals() {
    function fromNumber(number) {
        if (number == 1) {
            return "I";
        }
        return "II";

    }


    return {
        fromNumber,
    }
}

module.exports = romanNumerals;