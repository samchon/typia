import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";

export const test_createAssertEquals_FunctionalTupleUnion = _test_assertEquals(
  TypeGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): FunctionalTupleUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is FunctionalTupleUnion => {
      return (
        Array.isArray(input) &&
        input.length === 4 &&
        undefined !== input[0] &&
        (null === input[0] ||
          "function" === typeof input[0] ||
          "string" === typeof input[0] ||
          ("number" === typeof input[0] && Number.isFinite(input[0]))) &&
        undefined !== input[1] &&
        (null === input[1] ||
          "function" === typeof input[1] ||
          "string" === typeof input[1] ||
          ("number" === typeof input[1] && Number.isFinite(input[1]))) &&
        undefined !== input[2] &&
        (null === input[2] ||
          "function" === typeof input[2] ||
          "string" === typeof input[2] ||
          ("number" === typeof input[2] && Number.isFinite(input[2]))) &&
        undefined !== input[3] &&
        (null === input[3] ||
          "function" === typeof input[3] ||
          "string" === typeof input[3] ||
          ("number" === typeof input[3] && Number.isFinite(input[3])))
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalTupleUnion => {
        const $guard = (typia.createAssertEquals as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalTupleUnion",
                value: input,
              },
              errorFactory,
            )) &&
            (input.length === 4 ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "[(null | number | string), (null | number | string), (null | number | string), (null | number | string)]",
                  value: input,
                },
                errorFactory,
              )) &&
            (undefined !== input[0] ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "(null | number | string)",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (null === input[0] ||
              "function" === typeof input[0] ||
              "string" === typeof input[0] ||
              ("number" === typeof input[0] && Number.isFinite(input[0])) ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "(null | number | string)",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (undefined !== input[1] ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "(null | number | string)",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (null === input[1] ||
              "function" === typeof input[1] ||
              "string" === typeof input[1] ||
              ("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "(null | number | string)",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (undefined !== input[2] ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "(null | number | string)",
                  value: input[2],
                },
                errorFactory,
              )) &&
            (null === input[2] ||
              "function" === typeof input[2] ||
              "string" === typeof input[2] ||
              ("number" === typeof input[2] && Number.isFinite(input[2])) ||
              $guard(
                true,
                {
                  path: _path + "[2]",
                  expected: "(null | number | string)",
                  value: input[2],
                },
                errorFactory,
              )) &&
            (undefined !== input[3] ||
              $guard(
                true,
                {
                  path: _path + "[3]",
                  expected: "(null | number | string)",
                  value: input[3],
                },
                errorFactory,
              )) &&
            (null === input[3] ||
              "function" === typeof input[3] ||
              "string" === typeof input[3] ||
              ("number" === typeof input[3] && Number.isFinite(input[3])) ||
              $guard(
                true,
                {
                  path: _path + "[3]",
                  expected: "(null | number | string)",
                  value: input[3],
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "FunctionalTupleUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
