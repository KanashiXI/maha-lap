const MahaLap = require("./maha-Lap");

describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });

    // test("Test Tamnai with day", () => {
    //     const
    // });
});