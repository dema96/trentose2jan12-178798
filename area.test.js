const getArea = require("./area");

test('Test della funzione getArea con array [2,3]', () => {
    expect(getArea([2,3])).toBe(6);
});


test('Test della funzione getArea con array ["ciao",3]', () => {
    expect(getArea(["ciao",3])).toBe(-1);
});

test('Test della funzione getArea con array ["8u",3]', () => {
    expect(getArea(["8u",3])).toBe(-1);
});