import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createAssertCustom_ObjectGenericAlias = _test_assert(
  CustomGuardError,
)("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): ObjectGenericAlias => {
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
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.value ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            },
            errorFactory,
          );
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectGenericAlias.Alias",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
