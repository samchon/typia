import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_createAssert_TypeTagRange = _test_assert(TypeGuardError)(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagRange => {
    const __is = (input: any): input is TypeTagRange => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "number" === typeof input.greater &&
        Math.floor(input.greater) === input.greater &&
        -2147483648 <= input.greater &&
        input.greater <= 2147483647 &&
        3 < input.greater &&
        "number" === typeof input.greater_equal &&
        Math.floor(input.greater_equal) === input.greater_equal &&
        -2147483648 <= input.greater_equal &&
        input.greater_equal <= 2147483647 &&
        3 <= input.greater_equal &&
        "number" === typeof input.less &&
        Math.floor(input.less) === input.less &&
        -2147483648 <= input.less &&
        input.less <= 2147483647 &&
        input.less < 7 &&
        "number" === typeof input.less_equal &&
        Math.floor(input.less_equal) === input.less_equal &&
        -2147483648 <= input.less_equal &&
        input.less_equal <= 2147483647 &&
        input.less_equal <= 7 &&
        "number" === typeof input.greater_less &&
        Math.floor(input.greater_less) === input.greater_less &&
        -2147483648 <= input.greater_less &&
        input.greater_less <= 2147483647 &&
        3 < input.greater_less &&
        input.greater_less < 7 &&
        "number" === typeof input.greater_equal_less &&
        Math.floor(input.greater_equal_less) === input.greater_equal_less &&
        -2147483648 <= input.greater_equal_less &&
        input.greater_equal_less <= 2147483647 &&
        3 <= input.greater_equal_less &&
        input.greater_equal_less < 7 &&
        "number" === typeof input.greater_less_equal &&
        Math.floor(input.greater_less_equal) === input.greater_less_equal &&
        -2147483648 <= input.greater_less_equal &&
        input.greater_less_equal <= 2147483647 &&
        3 < input.greater_less_equal &&
        input.greater_less_equal <= 7 &&
        "number" === typeof input.greater_equal_less_equal &&
        Math.floor(input.greater_equal_less_equal) ===
          input.greater_equal_less_equal &&
        -2147483648 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 2147483647 &&
        3 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 7 &&
        "number" === typeof input.equal &&
        Math.floor(input.equal) === input.equal &&
        -2147483648 <= input.equal &&
        input.equal <= 2147483647 &&
        10 <= input.equal &&
        input.equal <= 10;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagRange => {
        const $guard = (typia.createAssert as any).guard;
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
                expected: "Array<TypeTagRange.Type>",
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
                      expected: "TypeTagRange.Type",
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
                    expected: "TypeTagRange.Type",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "Array<TypeTagRange.Type>",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.greater &&
            ((Math.floor(input.greater) === input.greater &&
              -2147483648 <= input.greater &&
              input.greater <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater",
                  expected: 'number & Type<"int32">',
                  value: input.greater,
                },
                errorFactory,
              )) &&
            (3 < input.greater ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater",
                expected: '(number & Type<"int32"> & ExclusiveMinimum<3>)',
                value: input.greater,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.greater_equal &&
            ((Math.floor(input.greater_equal) === input.greater_equal &&
              -2147483648 <= input.greater_equal &&
              input.greater_equal <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal,
                },
                errorFactory,
              )) &&
            (3 <= input.greater_equal ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater_equal",
                expected: '(number & Type<"int32"> & Minimum<3>)',
                value: input.greater_equal,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.less &&
            ((Math.floor(input.less) === input.less &&
              -2147483648 <= input.less &&
              input.less <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less",
                  expected: 'number & Type<"int32">',
                  value: input.less,
                },
                errorFactory,
              )) &&
            (input.less < 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.less,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".less",
                expected: '(number & Type<"int32"> & ExclusiveMaximum<7>)',
                value: input.less,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.less_equal &&
            ((Math.floor(input.less_equal) === input.less_equal &&
              -2147483648 <= input.less_equal &&
              input.less_equal <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.less_equal,
                },
                errorFactory,
              )) &&
            (input.less_equal <= 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".less_equal",
                  expected: "number & Maximum<7>",
                  value: input.less_equal,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".less_equal",
                expected: '(number & Type<"int32"> & Maximum<7>)',
                value: input.less_equal,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.greater_less &&
            ((Math.floor(input.greater_less) === input.greater_less &&
              -2147483648 <= input.greater_less &&
              input.greater_less <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less",
                  expected: 'number & Type<"int32">',
                  value: input.greater_less,
                },
                errorFactory,
              )) &&
            (3 < input.greater_less ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater_less,
                },
                errorFactory,
              )) &&
            (input.greater_less < 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.greater_less,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater_less",
                expected:
                  '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
                value: input.greater_less,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.greater_equal_less &&
            ((Math.floor(input.greater_equal_less) ===
              input.greater_equal_less &&
              -2147483648 <= input.greater_equal_less &&
              input.greater_equal_less <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal_less,
                },
                errorFactory,
              )) &&
            (3 <= input.greater_equal_less ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal_less,
                },
                errorFactory,
              )) &&
            (input.greater_equal_less < 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.greater_equal_less,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater_equal_less",
                expected:
                  '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
                value: input.greater_equal_less,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.greater_less_equal &&
            ((Math.floor(input.greater_less_equal) ===
              input.greater_less_equal &&
              -2147483648 <= input.greater_less_equal &&
              input.greater_less_equal <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_less_equal,
                },
                errorFactory,
              )) &&
            (3 < input.greater_less_equal ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less_equal",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater_less_equal,
                },
                errorFactory,
              )) &&
            (input.greater_less_equal <= 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_less_equal",
                  expected: "number & Maximum<7>",
                  value: input.greater_less_equal,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater_less_equal",
                expected:
                  '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
                value: input.greater_less_equal,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.greater_equal_less_equal &&
            ((Math.floor(input.greater_equal_less_equal) ===
              input.greater_equal_less_equal &&
              -2147483648 <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal_less_equal,
                },
                errorFactory,
              )) &&
            (3 <= input.greater_equal_less_equal ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less_equal",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal_less_equal,
                },
                errorFactory,
              )) &&
            (input.greater_equal_less_equal <= 7 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".greater_equal_less_equal",
                  expected: "number & Maximum<7>",
                  value: input.greater_equal_less_equal,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".greater_equal_less_equal",
                expected: '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
                value: input.greater_equal_less_equal,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.equal &&
            ((Math.floor(input.equal) === input.equal &&
              -2147483648 <= input.equal &&
              input.equal <= 2147483647) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".equal",
                  expected: 'number & Type<"int32">',
                  value: input.equal,
                },
                errorFactory,
              )) &&
            (10 <= input.equal ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".equal",
                  expected: "number & Minimum<10>",
                  value: input.equal,
                },
                errorFactory,
              )) &&
            (input.equal <= 10 ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".equal",
                  expected: "number & Maximum<10>",
                  value: input.equal,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".equal",
                expected:
                  '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
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
                expected: "TypeTagRange",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagRange",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
