import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_createAssertPruneCustom_ObjectLiteralProperty =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): ObjectLiteralProperty => {
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
            const $guard = (typia.misc.createAssertPrune as any).guard;
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
      const prune = (input: ObjectLiteralProperty): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "something-interesting-do-you-want?" === key ||
              "or-something-crazy-do-you-want?" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );
