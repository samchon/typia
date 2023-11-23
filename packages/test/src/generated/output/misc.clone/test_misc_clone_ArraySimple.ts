import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_misc_clone_ArraySimple = _test_misc_clone(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  ((input: ArraySimple): typia.Resolved<ArraySimple> => {
    const $io1 = (input: any): boolean =>
      "string" === typeof input.name &&
      "string" === typeof input.body &&
      "number" === typeof input.rank;
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
      );
    const $cp1 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
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
  })(input),
);
