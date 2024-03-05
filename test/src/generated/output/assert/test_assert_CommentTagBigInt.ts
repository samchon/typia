import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_assert_CommentTagBigInt = _test_assert(TypeGuardError)(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): CommentTagBigInt => {
    const __is = (input: any): input is CommentTagBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).value &&
        "bigint" === typeof (input as any).ranged &&
        0 <= (input as any).ranged &&
        (input as any).ranged <= 100 &&
        "bigint" === typeof (input as any).minimum &&
        0 <= (input as any).minimum &&
        "bigint" === typeof (input as any).maximum &&
        (input as any).maximum <= 100 &&
        "bigint" === typeof (input as any).multipleOf &&
        (input as any).multipleOf % 3n === 0n
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagBigInt => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.value ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "bigint",
                value: input.value,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.ranged &&
            (0 <= input.ranged ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ranged",
                  expected: "bigint & Minimum<0n>",
                  value: input.ranged,
                },
                errorFactory,
              )) &&
            (input.ranged <= 100 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".ranged",
                  expected: "bigint & Maximum<100n>",
                  value: input.ranged,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".ranged",
                expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                value: input.ranged,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.minimum &&
            (0 <= input.minimum ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".minimum",
                  expected: "bigint & Minimum<0n>",
                  value: input.minimum,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".minimum",
                expected: "(bigint & Minimum<0n>)",
                value: input.minimum,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.maximum &&
            (input.maximum <= 100 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".maximum",
                  expected: "bigint & Maximum<100n>",
                  value: input.maximum,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".maximum",
                expected: "(bigint & Maximum<100n>)",
                value: input.maximum,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.multipleOf &&
            (input.multipleOf % 3n === 0n ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".multipleOf",
                  expected: "bigint & MultipleOf<3n>",
                  value: input.multipleOf,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".multipleOf",
                expected: "(bigint & MultipleOf<3n>)",
                value: input.multipleOf,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "CommentTagBigInt",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "CommentTagBigInt",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
