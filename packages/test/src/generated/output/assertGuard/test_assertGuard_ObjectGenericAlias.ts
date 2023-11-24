import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertGuard_ObjectGenericAlias = _test_assertGuard(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  ((input: any): asserts input is ObjectGenericAlias => {
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
        const $guard = (typia.assertGuard as any).guard;
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
  })(input),
);
