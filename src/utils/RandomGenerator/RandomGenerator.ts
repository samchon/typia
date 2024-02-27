import RandExp from "randexp";

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

/* -----------------------------------------------------------
  REGULAR
----------------------------------------------------------- */
export const boolean = () => Math.random() < 0.5;
export const integer = (min?: number, max?: number) => {
  min ??= 0;
  max ??= 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const bigint = (min?: bigint, max?: bigint) =>
  BigInt(integer(Number(min ?? BigInt(0)), Number(max ?? BigInt(100))));
export const number = (min?: number, max?: number) => {
  min ??= 0;
  max ??= 100;
  return Math.random() * (max - min) + min;
};
export const string = (length?: number): string =>
  new Array(length ?? integer(5, 10))
    .fill(0)
    .map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)])
    .join("");

export const array = <T>(closure: (index: number) => T, count?: number): T[] =>
  new Array(count ?? length()).fill(0).map((_e, index) => closure(index));
export const pick = <T>(array: T[]): T => array[integer(0, array.length - 1)]!;
export const length = () => integer(0, 3);
export const pattern = (regex: RegExp): string => {
  const r: RandExp = new RandExp(regex);
  for (let i: number = 0; i < 10; ++i) {
    const str: string = r.gen();
    if (regex.test(str)) return str;
  }
  return r.gen();
};

/* -----------------------------------------------------------
  SECIAL FORMATS
----------------------------------------------------------- */
// SPECIAL CHARACTERS
export const byte = () => "vt7ekz4lIoNTTS9sDQYdWKharxIFAR54+z/umIxSgUM=";
export const password = () => string(integer(4, 16));
export const regex = () =>
  "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/";
export const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// ADDRESSES
export const email = () => `${string(10)}@${string(10)}.${string(3)}`;
export const hostname = () => `${string(10)}.${string(3)}`;
export const idnEmail = () => email();
export const idnHostname = () => hostname();
export const iri = () => url();
export const iriReference = () => url();
export const ipv4 = () => array(() => integer(0, 255), 4).join(".");
export const ipv6 = (): string =>
  array(() => integer(0, 65535).toString(16), 8).join(":");
export const uri = () => url();
export const uriReference = () => url();
export const uriTemplate = () => url();
export const url = () => `https://${string(10)}.${string(3)}`;

// TIMESTAMPS
export const datetime = (min?: number, max?: number) =>
  new Date(
    number(min ?? Date.now() - 30 * DAY, max ?? Date.now() + 7 * DAY),
  ).toISOString();
export const date = (min?: number, max?: number) =>
  new Date(number(min ?? 0, max ?? Date.now() * 2))
    .toISOString()
    .substring(0, 10);
export const time = () =>
  new Date(number(0, DAY)).toISOString().substring(11, 23);
export const duration = () => {
  const period: string = durate([
    ["Y", integer(0, 100)],
    ["M", integer(0, 12)],
    ["D", integer(0, 31)],
  ]);
  const time: string = durate([
    ["H", integer(0, 24)],
    ["M", integer(0, 60)],
    ["S", integer(0, 60)],
  ]);
  if (period.length + time.length === 0) return "PT0S";
  return `P${period}${time.length ? "T" : ""}${time}`;
};

// POINTERS
export const jsonPointer = () => `/components/schemas/${string(10)}`;
export const relativeJsonPointer = () => `${integer(0, 10)}#`;

const DAY = 86400000;
const durate = (elements: [string, number][]) =>
  elements
    .filter(([_unit, value]) => value !== 0)
    .map(([unit, value]) => `${value}${unit}`)
    .join("");
