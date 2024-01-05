import { discountPriceOfItem } from "../src/type";

describe("discountPriceOfItem", () => {
  it("should return discount value", () => {
    const discountValue = discountPriceOfItem(10000, 20);
    expect(discountValue).toBe(8000);
  });
});
