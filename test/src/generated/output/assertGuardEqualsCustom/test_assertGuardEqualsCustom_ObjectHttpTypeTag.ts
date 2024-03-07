import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardEqualsCustom_ObjectHttpTypeTag =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is ObjectHttpTypeTag => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ObjectHttpTypeTag => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.int32 &&
          Math.floor(input.int32) === input.int32 &&
          -2147483648 <= input.int32 &&
          input.int32 <= 2147483647 &&
          "bigint" === typeof input.uint64 &&
          BigInt(0) <= input.uint64 &&
          "string" === typeof input.uuid &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.uuid,
          ) &&
          Array.isArray(input.range) &&
          10 <= input.range.length &&
          input.range.length <= 100 &&
          input.range.every(
            (elem: any, _index1: number) =>
              "number" === typeof elem && 3 <= elem && elem <= 7,
          ) &&
          Array.isArray(input.length) &&
          10 <= input.length.length &&
          input.length.length <= 100 &&
          input.length.every(
            (elem: any, _index2: number) =>
              "string" === typeof elem && 3 <= elem.length && elem.length <= 7,
          ) &&
          (5 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["int32", "uint64", "uuid", "range", "length"].some(
                  (prop: any) => key === prop,
                )
              )
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
        ): input is ObjectHttpTypeTag => {
          const $guard = (typia.assertGuardEquals as any).guard;
          const $join = (typia.assertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.int32 &&
              ((Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int32",
                    expected: 'number & Type<"int32">',
                    value: input.int32,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".int32",
                  expected: '(number & Type<"int32">)',
                  value: input.int32,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint64",
                    expected: 'bigint & Type<"uint64">',
                    value: input.uint64,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uint64",
                  expected: '(bigint & Type<"uint64">)',
                  value: input.uint64,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.uuid &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uuid",
                    expected: 'string & Format<"uuid">',
                    value: input.uuid,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uuid",
                  expected: '(string & Format<"uuid">)',
                  value: input.uuid,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.range) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                },
                errorFactory,
              )) &&
              (10 <= input.range.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".range",
                    expected: "Array<> & MinItems<10>",
                    value: input.range,
                  },
                  errorFactory,
                )) &&
              (input.range.length <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".range",
                    expected: "Array<> & MaxItems<100>",
                    value: input.range,
                  },
                  errorFactory,
                )) &&
              input.range.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem &&
                    (3 <= elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Minimum<3>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (elem <= 7 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Maximum<7>",
                          value: elem,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "(number & Minimum<3> & Maximum<7>)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.length) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                },
                errorFactory,
              )) &&
              (10 <= input.length.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".length",
                    expected: "Array<> & MinItems<10>",
                    value: input.length,
                  },
                  errorFactory,
                )) &&
              (input.length.length <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".length",
                    expected: "Array<> & MaxItems<100>",
                    value: input.length,
                  },
                  errorFactory,
                )) &&
              input.length.every(
                (elem: any, _index2: number) =>
                  ("string" === typeof elem &&
                    (3 <= elem.length ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MinLength<3>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (elem.length <= 7 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MaxLength<7>",
                          value: elem,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                },
                errorFactory,
              )) &&
            (5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["int32", "uint64", "uuid", "range", "length"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpTypeTag",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpTypeTag",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    })(input, (p) => new CustomGuardError(p)),
  );
