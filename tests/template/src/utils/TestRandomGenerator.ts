import RandExp from "randexp";
import { back_inserter, ranges } from "tstl";
import { _randomFormatDuration } from "typia/lib/internal/_randomFormatDuration";

/** Supplies randomized ordinary fixture values without asserting producers. */
export namespace TestRandomGenerator {
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

  /** Creates a fixture array by invoking its indexed supplier for every slot. */
  export const array = <T>(
    closure: (index: number) => T,
    count?: number,
  ): T[] =>
    new Array(count ?? TestRandomGenerator.integer(3, 10))
      .fill(0)
      .map((_e, index) => closure(index));

  /** Supplies a requested sample through the fixture's collection utility. */
  export const sample =
    <T>(array: T[]) =>
    (count: number): T[] => {
      const ret: T[] = [];
      ranges.sample(array, back_inserter(ret), count);
      return ret;
    };

  /* -----------------------------------------------------------
        REGULAR
    ----------------------------------------------------------- */
  /** Supplies an ordinary randomized Boolean fixture value. */
  export const boolean = () => Math.random() < 0.5;

  /** Supplies bounded fixture integers, defaulting to zero through one hundred. */
  export const integer = (min?: number, max?: number) => {
    min ??= 0;
    max ??= 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /** Supplies fixture-sized bigints through the ordinary integer sampler. */
  export const bigint = (min?: bigint, max?: bigint) => {
    min ??= BigInt(0);
    max ??= BigInt(100);
    return BigInt(integer(Number(min), Number(max)));
  };

  /** Supplies ordinary numeric fixture samples between authored endpoints. */
  export const number = (min?: number, max?: number) => {
    min ??= 0;
    max ??= 100;
    return Math.random() * (max - min) + min;
  };

  /** Supplies lowercase alphabetic fixture strings of the requested length. */
  export const string = (length?: number): string =>
    new Array(length ?? integer(5, 10))
      .fill(0)
      .map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)])
      .join("");

  /** Picks an ordinary fixture element from an authored nonempty population. */
  export const pick = <T>(array: T[]): T =>
    array[integer(0, array.length - 1)]!;

  /** Supplies a small optional fixture length from zero through three. */
  export const length = () => integer(0, 3);

  /* -----------------------------------------------------------
        SPECIAL FORMATS
    ----------------------------------------------------------- */
  /** Supplies a randomized version-four UUID-shaped fixture string. */
  export const uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

  /** Supplies an ordinary lowercase email-shaped fixture string. */
  export const email = () => `${string(10)}@${string(10)}.${string(3)}`;

  /** Supplies a simple HTTPS URL-shaped preparation value. */
  export const url = () => `https://${string(10)}.${string(3)}`;

  /** Supplies four decimal byte components as an IPv4-shaped input. */
  export const ipv4 = () => array(() => integer(0, 255), 4).join(".");

  /** Supplies eight hexadecimal groups as an IPv6-shaped input. */
  export const ipv6 = (): string =>
    array(() => integer(0, 65535).toString(16), 8).join(":");

  /** Delegates regex-shaped input generation to RandExp. */
  export const pattern = (regex: RegExp): string => new RandExp(regex).gen();

  /** Supplies a UTC date string from a caller-bounded timestamp sample. */
  export const date = (min?: number, max?: number) => {
    min ??= 0;
    max ??= Date.now() * 2;
    return new Date(number(min, max)).toISOString().substring(0, 10);
  };

  /** Supplies a UTC ISO timestamp from an ordinary bounded sample. */
  export const datetime = (min?: number, max?: number) => {
    min ??= Date.now() - 30 * DAY;
    max ??= Date.now() + 7 * DAY;
    return new Date(number(min, max)).toISOString();
  };

  /** Supplies duration preparation data through the product's format helper. */
  export const duration = () => _randomFormatDuration();
}

const DAY = 1000 * 60 * 60 * 24;
