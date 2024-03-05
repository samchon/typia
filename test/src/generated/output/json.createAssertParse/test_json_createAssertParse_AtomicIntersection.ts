import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_createAssertParse_AtomicIntersection =
  _test_json_assertParse(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    (
      input: string,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Primitive<AtomicIntersection> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): AtomicIntersection => {
        const __is = (input: any): input is AtomicIntersection => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicIntersection => {
            const $guard = (typia.json.createAssertParse as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "AtomicIntersection",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 3 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "[boolean, number, string]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                ("boolean" === typeof input[0] ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "boolean",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "number",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input[2] ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "string",
                      value: input[2],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "AtomicIntersection",
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
    },
  );
