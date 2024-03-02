import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_createAssertGuard_ArrayAtomicAlias = _test_assertGuard(
  TypeGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ArrayAtomicAlias => {
    const __is = (input: any): input is ArrayAtomicAlias => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        Array.isArray(input[0]) &&
        input[0].every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input[1]) &&
        input[1].every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input[2]) &&
        input[2].every((elem: any) => "string" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayAtomicAlias => {
        const $guard = (typia.createAssertGuard as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayAtomicAlias",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 3 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                  value: input,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[0]) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ArrayAtomicAlias.Alias<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
              input[0].every(
                (elem: any, _index1: number) =>
                  "boolean" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[0][" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "ArrayAtomicAlias.Alias<boolean>",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[1]) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ArrayAtomicAlias.Alias<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
              input[1].every(
                (elem: any, _index2: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1][" + _index2 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "ArrayAtomicAlias.Alias<number>",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input[2]) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ArrayAtomicAlias.Alias<string>",
                  value: input[2],
                },
                errorFactory,
              )) &&
              input[2].every(
                (elem: any, _index3: number) =>
                  "string" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[2][" + _index3 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "ArrayAtomicAlias.Alias<string>",
                  value: input[2],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ArrayAtomicAlias",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
