import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_misc_createIsClone_ArraySimple = _test_misc_isClone(
  "ArraySimple",
)<ArraySimple>(ArraySimple)(
  (input: any): import("typia").Resolved<ArraySimple> | null => {
    const is = (input: any): input is ArraySimple => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.email &&
        Array.isArray(input.hobbies) &&
        input.hobbies.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank &&
        Number.isFinite(input.rank);
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const clone = (
      input: ArraySimple,
    ): import("typia").Resolved<ArraySimple> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "string" === typeof input.body &&
        "number" === typeof input.rank;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        name: input.name as any,
        email: input.email as any,
        hobbies: Array.isArray(input.hobbies)
          ? $cp1(input.hobbies)
          : (input.hobbies as any),
      });
      const $co1 = (input: any): any => ({
        name: input.name as any,
        body: input.body as any,
        rank: input.rank as any,
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
