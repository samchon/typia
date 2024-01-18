import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_assertClone_ObjectGenericAlias = _test_misc_assertClone(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  ((input: any): typia.Resolved<ObjectGenericAlias> => {
    const assert = (input: any): ObjectGenericAlias => {
      const __is = (input: any): input is ObjectGenericAlias => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).value
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectGenericAlias => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.assertClone",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            "string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectGenericAlias.Alias",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (
      input: ObjectGenericAlias,
    ): typia.Resolved<ObjectGenericAlias> => {
      const $co0 = (input: any): any => ({
        value: input.value as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
