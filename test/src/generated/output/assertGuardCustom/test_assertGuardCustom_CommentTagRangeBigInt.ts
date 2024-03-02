import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_assertGuardCustom_CommentTagRangeBigInt = _test_assertGuard(
  CustomGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is CommentTagRangeBigInt => {
      const __is = (input: any): input is CommentTagRangeBigInt => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "bigint" === typeof input.greater &&
          3 < input.greater &&
          "bigint" === typeof input.greater_equal &&
          3 <= input.greater_equal &&
          "bigint" === typeof input.less &&
          input.less < 7 &&
          "bigint" === typeof input.less_equal &&
          input.less_equal <= 7 &&
          "bigint" === typeof input.greater_less &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "bigint" === typeof input.greater_equal_less &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "bigint" === typeof input.greater_less_equal &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "bigint" === typeof input.greater_equal_less_equal &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "bigint" === typeof input.equal &&
          10 <= input.equal &&
          input.equal <= 10;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagRangeBigInt => {
          const $guard = (typia.assertGuard as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<CommentTagRangeBigInt.Type>",
                  value: input.value,
                },
                errorFactory,
              )) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "CommentTagRangeBigInt.Type",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "CommentTagRangeBigInt.Type",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<CommentTagRangeBigInt.Type>",
                value: input.value,
              },
              errorFactory,
            );
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("bigint" === typeof input.greater &&
              (3 < input.greater ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater",
                    expected: "bigint & ExclusiveMinimum<3n>",
                    value: input.greater,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater",
                  expected: "(bigint & ExclusiveMinimum<3n>)",
                  value: input.greater,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.greater_equal &&
              (3 <= input.greater_equal ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_equal",
                    expected: "bigint & Minimum<3n>",
                    value: input.greater_equal,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal",
                  expected: "(bigint & Minimum<3n>)",
                  value: input.greater_equal,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.less &&
              (input.less < 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".less",
                    expected: "bigint & ExclusiveMaximum<7n>",
                    value: input.less,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less",
                  expected: "(bigint & ExclusiveMaximum<7n>)",
                  value: input.less,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.less_equal &&
              (input.less_equal <= 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".less_equal",
                    expected: "bigint & Maximum<7n>",
                    value: input.less_equal,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less_equal",
                  expected: "(bigint & Maximum<7n>)",
                  value: input.less_equal,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.greater_less &&
              (3 < input.greater_less ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_less",
                    expected: "bigint & ExclusiveMinimum<3n>",
                    value: input.greater_less,
                  },
                  errorFactory,
                )) &&
              (input.greater_less < 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_less",
                    expected: "bigint & ExclusiveMaximum<7n>",
                    value: input.greater_less,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less",
                  expected:
                    "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                  value: input.greater_less,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.greater_equal_less &&
              (3 <= input.greater_equal_less ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_equal_less",
                    expected: "bigint & Minimum<3n>",
                    value: input.greater_equal_less,
                  },
                  errorFactory,
                )) &&
              (input.greater_equal_less < 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_equal_less",
                    expected: "bigint & ExclusiveMaximum<7n>",
                    value: input.greater_equal_less,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less",
                  expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                  value: input.greater_equal_less,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.greater_less_equal &&
              (3 < input.greater_less_equal ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_less_equal",
                    expected: "bigint & ExclusiveMinimum<3n>",
                    value: input.greater_less_equal,
                  },
                  errorFactory,
                )) &&
              (input.greater_less_equal <= 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_less_equal",
                    expected: "bigint & Maximum<7n>",
                    value: input.greater_less_equal,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less_equal",
                  expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                  value: input.greater_less_equal,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.greater_equal_less_equal &&
              (3 <= input.greater_equal_less_equal ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_equal_less_equal",
                    expected: "bigint & Minimum<3n>",
                    value: input.greater_equal_less_equal,
                  },
                  errorFactory,
                )) &&
              (input.greater_equal_less_equal <= 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".greater_equal_less_equal",
                    expected: "bigint & Maximum<7n>",
                    value: input.greater_equal_less_equal,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less_equal",
                  expected: "(bigint & Minimum<3n> & Maximum<7n>)",
                  value: input.greater_equal_less_equal,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.equal &&
              (10 <= input.equal ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".equal",
                    expected: "bigint & Minimum<10n>",
                    value: input.equal,
                  },
                  errorFactory,
                )) &&
              (input.equal <= 10 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".equal",
                    expected: "bigint & Maximum<10n>",
                    value: input.equal,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".equal",
                  expected: "(bigint & Minimum<10n> & Maximum<10n>)",
                  value: input.equal,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "CommentTagRangeBigInt",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "CommentTagRangeBigInt",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    })(input, (p) => new CustomGuardError(p)),
);
