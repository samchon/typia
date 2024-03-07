import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_createAssertStringifyCustom_ObjectGenericAlias =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
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
      const stringify = (input: ObjectGenericAlias): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        return `{"value":${$string((input as any).value)}}`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
