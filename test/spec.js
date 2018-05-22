const app = require("../src/main");
const romanNumerals = require("../src/romanNumerals");

describe("test de prueba", function () {
    xit("verdadero es verdadero", function () {
        expect(true).toBeTruthy();
    });

    it("converts numbers to Roman numerals", function () {
        expect(romanNumerals.fromNumber(1)).toBe("I");
    });


});