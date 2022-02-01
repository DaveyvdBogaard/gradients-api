import { parsePoints } from "shared";

describe("Parse points", () => {
  // FROM
  // x: [ '0', '500' ],
  // y: [ '0', '300' ],
  // color: [ '#FFFFFF', '#FAB555' ]
  // TO
  // [
  // { x: 0, y: 0, color: "#FFFFFF" },
  // { x: 500, y: 300, color: "#FAB555" },
  //   ]
  const inData = { x: ["0", "500"], y: ["0", "300"], color: ["#FFFFFF", "#FAB555"] };
  const outData = [
    { x: 0, y: 0, color: "#FFFFFF" },
    { x: 500, y: 300, color: "#FAB555" },
  ];
  test("it should return a empty points array", () => {
    expect(parsePoints([])).toBe([]);
  });
  test("it should return a full points array", () => {
    expect(parsePoints(inData)).toBe(outData);
  });
});
