import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_assertParse_ObjectGenericAlias = _test_json_assertParse(
  TypeGuardError,
)("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  ((
    input: string,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Primitive<ObjectGenericAlias> => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
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
          const $guard = (typia.json.assertParse as any).guard;
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
    };
    input = JSON.parse(input);
    return assert(input, errorFactory) as any;
  })(input),
);
