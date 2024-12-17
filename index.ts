import type { DateInput, HijriDate } from "./types";

const ISLAMIC_EPOCH = 1948439.5;

export function toHijri(input: DateInput): HijriDate {
  let gYear: number, gMonth: number, gDay: number;

  if (input instanceof Date) {
    if (isNaN(input.getTime())) {
      throw new Error("Invalid Gregorian date");
    }
    gYear = input.getFullYear();
    gMonth = input.getMonth() + 1;
    gDay = input.getDate();
  } else if (Array.isArray(input) && input.length === 3) {
    [gYear, gMonth, gDay] = input;
  } else {
    throw new Error(
      "Invalid input. Please provide a Date object or an array [year, month, day]"
    );
  }

  if (gYear < 1 || gMonth < 1 || gMonth > 12 || gDay < 1 || gDay > 31) {
    throw new Error("Invalid Gregorian date");
  }

  const jd = gregorianToJulian(gYear, gMonth, gDay);
  return julianToHijri(jd);
}

function gregorianToJulian(year: number, month: number, day: number): number {
  if (month < 3) {
    year -= 1;
    month += 12;
  }
  const a = Math.floor(year / 100);
  const b = 2 - a + Math.floor(a / 4);
  return (
    Math.floor(365.25 * (year + 4716)) +
    Math.floor(30.6001 * (month + 1)) +
    day +
    b -
    1524.5
  );
}

function julianToHijri(jd: number): HijriDate {
  jd = Math.floor(jd) + 0.5;
  const year = Math.floor((30 * (jd - ISLAMIC_EPOCH) + 10646) / 10631);
  const month = Math.min(
    12,
    Math.ceil((jd - (29 + julianToHijriDay(year, 1, 1))) / 29.5) + 1
  );
  const day = jd - julianToHijriDay(year, month, 1) + 1;

  return { year, month, day };
}

function julianToHijriDay(year: number, month: number, day: number): number {
  return (
    day +
    Math.ceil(29.5 * (month - 1)) +
    (year - 1) * 354 +
    Math.floor((3 + 11 * year) / 30) +
    ISLAMIC_EPOCH -
    1
  );
}
