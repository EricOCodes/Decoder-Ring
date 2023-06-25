const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return a string when encoding", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });
    it("should return false if the number of characters (excluding spaces) is odd when decoding", () => {
        const actual = polybius("4455667788991", false);
        expect(actual).to.be.false;
    });
    it("should be able to show both i and j when decoding despite them sharing a value", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capital letters when encoding", () => {
        const expected = "4432423352125413 4234 31434313";
        const actual = polybius("Thinkful is Cool");
        expect(actual).to.equal(expected);
    });
});