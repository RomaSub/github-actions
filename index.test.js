import { add } from "./index.js";
import { expect, test } from "@jest/globals";

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("-1 + 1 = 0", () => {
  expect(add(-1, 1)).toBe(0);
});
