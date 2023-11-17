import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_misc_createIsClone_ObjectPartialAndRequired =
  _test_misc_isClone("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input: any): typia.Resolved<ObjectPartialAndRequired> | null => {
    const is = (input: any): input is ObjectPartialAndRequired => {
      const $io0 = (input: any): boolean =>
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io0(input.object))) &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (
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
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  });
