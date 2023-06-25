const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return an encoded message when given an input and shift value", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should return a decoded message when given an input, shift value, and encode is false", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25 or greater than 25", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });
    it("should maintain spaces and nonalphabetic symbols while ignoring capital letters", () => {
        const expected = "vhyhqwh3q !v d jrrg qxpehu!@#$?"
        const actual = caesar("SevEnTE3n !s a Good Number!@#$?", 3);
        expect(actual).to.equal(expected);
    });
    it("should wrap around the alphabet if the shift would put the new letter beyond a or z", () => {
        const expected = "ccc";
        const actual = caesar("zzz", 3);
        expect(actual).to.equal(expected);
    })
});
