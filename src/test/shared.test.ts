import { parsePoints } from "shared";

describe("Parse points", () => {
  const givenDataX = ["0", "500"];
  const givenDataY = ["0", "300"];
  const givenDataColor = ["#FFFFFF", "#FAB555"];
  const expectedData = [
    { x: 0, y: 0, color: "#FFFFFF" },
    { x: 500, y: 300, color: "#FAB555" },
  ];
  test("it should return a full points array", () => {
    expect(parsePoints(givenDataX, givenDataY, givenDataColor)).toStrictEqual(expectedData);
  });
});
