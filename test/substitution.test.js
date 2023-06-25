const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return a string when given an input and an alphabet", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should be able to use a alphabet containing nonalphabetic characters", () => {
        const expected = "jdxgfznc";
        const actual = substitution("thinkful", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capital letters", () => {
        const expected = "jrufscpw ud yllw";
        const actual = substitution("Thinkful is Cool", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should return false if the alphabet given is not exactly 26 characters long", () => {
        const actual = substitution("Will be short", "tooshort");
        expect(actual).to.be.false;
    });
    it("should return false if the alphabet given is not 26 unique characters", () => {
        const actual = substitution("Not Unique", "aabbccddeeffgghhiijjkkllmm");
        expect(actual).to.be.false;
    })
});
