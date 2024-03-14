import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_createAssertStringifyCustom_ObjectLiteralProperty =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectLiteralProperty => {
        const __is = (input: any): input is ObjectLiteralProperty => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" ===
              typeof (input as any)["something-interesting-do-you-want?"] &&
            "string" ===
              typeof (input as any)["or-something-crazy-do-you-want?"]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectLiteralProperty => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" ===
                typeof input["something-interesting-do-you-want?"] ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["something-interesting-do-you-want?"]',
                    expected: "string",
                    value: input["something-interesting-do-you-want?"],
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + '["or-something-crazy-do-you-want?"]',
                    expected: "string",
                    value: input["or-something-crazy-do-you-want?"],
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectLiteralProperty.ISomething",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectLiteralProperty.ISomething",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectLiteralProperty): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        return `{"something-interesting-do-you-want?":${$string((input as any)["something-interesting-do-you-want?"])},"or-something-crazy-do-you-want?":${$string((input as any)["or-something-crazy-do-you-want?"])}}`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
