const MahaLap = require("./maha-Lap");

describe("Test Maha-Lap", () => {
    test("Test Tamnai with Sunday expect 1", () => {
        const result = MahaLap.tamnaiWithDay("อาทิตย์");
        expect(result).toEqual(1);
    });

    test("Test Tamnai with Monday expect 2", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });

    test("Test Tamnai with Tuesday expect 3", () => {
        const result = MahaLap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
    });

    test("Test Tamnai with Wednesday expect 4", () => {
        const result = MahaLap.tamnaiWithDay("พุธ");
        expect(result).toEqual(4);
    });

    test("Test Tamnai with Thursday expect 5", () => {
        const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
        expect(result).toEqual(5);
    });

    test("Test Tamnai with Friday expect 6", () => {
        const result = MahaLap.tamnaiWithDay("ศุกร์");
        expect(result).toEqual(6);
    });

    test("Test Tamnai with Saturday expect 7", () => {
        const result = MahaLap.tamnaiWithDay("เสาร์");
        expect(result).toEqual(7);
    });

    test("Test Tamnai with Songkran expect 13", () => {
        const result = MahaLap.tamnaiWithDay("สงกรานต์");
        expect(result).toEqual(13);
    });

    test("Test Tamnai with Chrismas expect 25", () => {
        const result = MahaLap.tamnaiWithDay("คริสมาสต์");
        expect(result).toEqual(25);
    });

    test("Test Tamnai with Haloween expect 31", () => {
        const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
        expect(result).toEqual(31);
    });

    test("Test Tamnai with ETC expect UptoYou", () => {
        const result = MahaLap.tamnaiWithDay(60);
        expect(result).toEqual("แล้วแต่อยากซื้อ");
    });


});