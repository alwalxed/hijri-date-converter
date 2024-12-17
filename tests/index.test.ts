import { toHijri } from "..";

describe("toHijri", () => {
  it("should convert Gregorian date to Hijri date correctly using array input", () => {
    expect(toHijri([2023, 5, 21])).toEqual({ year: 1444, month: 11, day: 1 });
    expect(toHijri([2000, 1, 1])).toEqual({ year: 1420, month: 9, day: 24 });
    expect(toHijri([2023, 7, 19])).toEqual({ year: 1445, month: 1, day: 1 });
    expect(toHijri([2024, 2, 29])).toEqual({ year: 1445, month: 8, day: 19 });
    expect(toHijri([2023, 1, 1])).toEqual({ year: 1444, month: 6, day: 8 });
    expect(toHijri([2023, 12, 31])).toEqual({ year: 1445, month: 6, day: 18 });
  });

  it("should convert Gregorian date to Hijri date correctly using Date object input", () => {
    expect(toHijri(new Date(2023, 4, 21))).toEqual({
      year: 1444,
      month: 11,
      day: 1,
    });
    expect(toHijri(new Date(2000, 0, 1))).toEqual({
      year: 1420,
      month: 9,
      day: 24,
    });
    expect(toHijri(new Date(2023, 6, 19))).toEqual({
      year: 1445,
      month: 1,
      day: 1,
    });
    expect(toHijri(new Date(2024, 1, 29))).toEqual({
      year: 1445,
      month: 8,
      day: 19,
    });
  });

  it("should throw an error for invalid array input", () => {
    expect(() => toHijri([0, 1, 1])).toThrow("Invalid Gregorian date");
    expect(() => toHijri([2023, 0, 1])).toThrow("Invalid Gregorian date");
    expect(() => toHijri([2023, 13, 1])).toThrow("Invalid Gregorian date");
    expect(() => toHijri([2023, 1, 0])).toThrow("Invalid Gregorian date");
    expect(() => toHijri([2023, 1, 32])).toThrow("Invalid Gregorian date");
  });

  it("should throw an error for invalid Date object input", () => {
    expect(() => toHijri(new Date("invalid date"))).toThrow(
      "Invalid Gregorian date"
    );
  });

  it("should throw an error for invalid input type", () => {
    expect(() => toHijri("2023-05-21" as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri(42 as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri({} as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri(null as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri(undefined as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri(true as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
    expect(() => toHijri(false as any)).toThrow(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
  });
});
