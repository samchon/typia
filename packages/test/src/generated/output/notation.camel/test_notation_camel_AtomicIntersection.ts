import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_notation_validateCamel_AtomicIntersection =
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.CamelCase<AtomicIntersection>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<AtomicIntersection>> => {
        const validate = (
          input: any,
        ): typia.IValidation<AtomicIntersection> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is AtomicIntersection => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "AtomicIntersection",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $report(true, {
                      path: _path + "",
                      expected: "[boolean, number, string]",
                      value: input,
                    })) &&
                  [
                    "boolean" === typeof input[0] ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      }),
                    ("number" === typeof input[1] &&
                      Number.isFinite(input[1])) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      }),
                    "string" === typeof input[2] ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "string",
                        value: input[2],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "AtomicIntersection",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        };
        const general = (
          input: AtomicIntersection,
        ): typia.CamelCase<AtomicIntersection> => {
          return Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            "string" === typeof input[2]
            ? ([input[0] as any, input[1] as any, input[2] as any] as any)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.CamelCase<AtomicIntersection> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<AtomicIntersection> => {
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
        ): input is typia.CamelCase<AtomicIntersection> => {
          const $guard = (typia.createAssert as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "AtomicIntersection",
                value: input,
              })) &&
              (input.length === 3 ||
                $guard(true, {
                  path: _path + "",
                  expected: "[boolean, number, string]",
                  value: input,
                })) &&
              ("boolean" === typeof input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                })) &&
              (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                })) &&
              ("string" === typeof input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "string",
                  value: input[2],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "AtomicIntersection",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
