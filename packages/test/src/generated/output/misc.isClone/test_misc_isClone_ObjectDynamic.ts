import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_misc_isClone_ObjectDynamic = _test_misc_isClone(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  ((input: any): typia.Resolved<ObjectDynamic> | null => {
    const is = (input: any): input is ObjectDynamic => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true)
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const clone = (input: ObjectDynamic): typia.Resolved<ObjectDynamic> => {
      const $co0 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/(.*)/).test(key)) {
            output[key] = value as any;
            continue;
          }
        }
        return output;
      };
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
