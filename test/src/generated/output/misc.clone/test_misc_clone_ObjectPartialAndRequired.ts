import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_misc_clone_ObjectPartialAndRequired = _test_misc_clone(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
  ((
    input: ObjectPartialAndRequired,
  ): typia.Resolved<ObjectPartialAndRequired> => {
    const $io0 = (input: any): boolean =>
      (undefined === input.string || "string" === typeof input.string) &&
      (undefined === input.number || "number" === typeof input.number) &&
      (undefined === input.boolean || "boolean" === typeof input.boolean) &&
      (null === input.object ||
        ("object" === typeof input.object &&
          null !== input.object &&
          $io0(input.object))) &&
      Array.isArray(input.array) &&
      input.array.every((elem: any) => "number" === typeof elem);
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
      string: input.string as any,
      number: input.number as any,
      boolean: input.boolean as any,
      object:
        "object" === typeof input.object && null !== input.object
          ? $co0(input.object)
          : (input.object as any),
      array: Array.isArray(input.array)
        ? $cp0(input.array)
        : (input.array as any),
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
