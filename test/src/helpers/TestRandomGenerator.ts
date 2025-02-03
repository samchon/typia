import RandExp from "randexp";
import { back_inserter, ranges } from "tstl";
import { _randomFormatDuration } from "typia/lib/internal/_randomFormatDuration";

export namespace TestRandomGenerator {
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

  export const array = <T>(
    closure: (index: number) => T,
    count?: number,
  ): T[] =>
    new Array(count ?? TestRandomGenerator.integer(3, 10))
      .fill(0)
      .map((_e, index) => closure(index));

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
  export const boolean = () => Math.random() < 0.5;

  export const integer = (min?: number, max?: number) => {
    min ??= 0;
    max ??= 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export const bigint = (min?: bigint, max?: bigint) => {
    min ??= BigInt(0);
    max ??= BigInt(100);
    return BigInt(integer(Number(min), Number(max)));
  };

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

  export const pick = <T>(array: T[]): T =>
    array[integer(0, array.length - 1)]!;

  export const length = () => integer(0, 3);

  /* -----------------------------------------------------------
        SPECIAL FORMATS
    ----------------------------------------------------------- */
  export const uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

  export const email = () => `${string(10)}@${string(10)}.${string(3)}`;

  export const url = () => `https://${string(10)}.${string(3)}`;

  export const ipv4 = () => array(() => integer(0, 255), 4).join(".");

  export const ipv6 = (): string =>
    array(() => integer(0, 65535).toString(16), 8).join(":");

  export const pattern = (regex: RegExp): string => new RandExp(regex).gen();

  export const date = (min?: number, max?: number) => {
    min ??= 0;
    max ??= Date.now() * 2;
    return new Date(number(min, max)).toISOString().substring(0, 10);
  };

  export const datetime = (min?: number, max?: number) => {
    min ??= Date.now() - 30 * DAY;
    max ??= Date.now() + 7 * DAY;
    return new Date(number(min, max)).toISOString();
  };

  export const duration = () => _randomFormatDuration();
}

const DAY = 1000 * 60 * 60 * 24;
