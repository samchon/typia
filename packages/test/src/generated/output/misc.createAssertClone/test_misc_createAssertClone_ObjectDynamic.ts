import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_misc_createAssertClone_ObjectDynamic = _test_misc_assertClone(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input: any): typia.Resolved<ObjectDynamic> => {
  const assert = (input: any): ObjectDynamic => {
    const __is = (input: any): input is ObjectDynamic => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectDynamic => {
        const $guard = (typia.misc.createAssertClone as any).guard;
        const $join = (typia.misc.createAssertClone as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (true)
              return (
                "string" === typeof value ||
                ("number" === typeof value && Number.isFinite(value)) ||
                "boolean" === typeof value ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "(boolean | number | string)",
                  value: value,
                })
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectDynamic",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectDynamic",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
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
  assert(input);
  const output = clone(input);
  return output;
});
