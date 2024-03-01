import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_createAssertGuardEquals_FunctionalProperty =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): asserts input is FunctionalProperty => {
      const $guard = (typia.createAssertGuardEquals as any).guard(errorFactory);
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalProperty => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.name &&
          "function" === typeof input.closure &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["name", "closure"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalProperty => {
          const $join = (typia.createAssertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("function" === typeof input.closure ||
              $guard(_exceptionable, {
                path: _path + ".closure",
                expected: "unknown",
                value: input.closure,
              })) &&
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["name", "closure"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "FunctionalProperty",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "FunctionalProperty",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );
