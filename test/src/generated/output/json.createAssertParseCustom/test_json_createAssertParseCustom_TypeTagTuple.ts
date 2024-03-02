import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_createAssertParseCustom_TypeTagTuple =
  _test_json_assertParse(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(
    (
      input: string,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Primitive<TypeTagTuple> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TypeTagTuple => {
        const __is = (input: any): input is TypeTagTuple => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.tuple) &&
            input.tuple.length === 4 &&
            "string" === typeof input.tuple[0] &&
            3 <= input.tuple[0].length &&
            input.tuple[0].length <= 7 &&
            "number" === typeof input.tuple[1] &&
            3 <= input.tuple[1] &&
            input.tuple[1] <= 7 &&
            Array.isArray(input.tuple[2]) &&
            3 <= input.tuple[2].length &&
            input.tuple[2].length <= 7 &&
            input.tuple[2].every(
              (elem: any) =>
                "string" === typeof elem &&
                1 <= elem.length &&
                elem.length <= 2,
            ) &&
            Array.isArray(input.tuple[3]) &&
            3 <= input.tuple[3].length &&
            input.tuple[3].length <= 7 &&
            input.tuple[3].every(
              (elem: any) => "number" === typeof elem && 1 <= elem && elem <= 2,
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagTuple => {
            const $guard = (typia.json.createAssertParse as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.tuple) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".tuple",
                    expected:
                      "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
                    value: input.tuple,
                  },
                  errorFactory,
                )) &&
                (input.tuple.length === 4 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple",
                      expected:
                        "[(string & MinLength<3> & MaxLength<7>), (number & Minimum<3> & Maximum<7>), (Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>), (Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)]",
                      value: input.tuple,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.tuple[0] &&
                  (3 <= input.tuple[0].length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[0]",
                        expected: "string & MinLength<3>",
                        value: input.tuple[0],
                      },
                      errorFactory,
                    )) &&
                  (input.tuple[0].length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[0]",
                        expected: "string & MaxLength<7>",
                        value: input.tuple[0],
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[0]",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: input.tuple[0],
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.tuple[1] &&
                  (3 <= input.tuple[1] ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[1]",
                        expected: "number & Minimum<3>",
                        value: input.tuple[1],
                      },
                      errorFactory,
                    )) &&
                  (input.tuple[1] <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[1]",
                        expected: "number & Maximum<7>",
                        value: input.tuple[1],
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[1]",
                      expected: "(number & Minimum<3> & Maximum<7>)",
                      value: input.tuple[1],
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.tuple[2]) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[2]",
                      expected:
                        "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                      value: input.tuple[2],
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.tuple[2].length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[2]",
                        expected: "Array<> & MinItems<3>",
                        value: input.tuple[2],
                      },
                      errorFactory,
                    )) &&
                  (input.tuple[2].length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[2]",
                        expected: "Array<> & MaxItems<7>",
                        value: input.tuple[2],
                      },
                      errorFactory,
                    )) &&
                  input.tuple[2].every(
                    (elem: any, _index1: number) =>
                      ("string" === typeof elem &&
                        (1 <= elem.length ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".tuple[2][" + _index1 + "]",
                              expected: "string & MinLength<1>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (elem.length <= 2 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".tuple[2][" + _index1 + "]",
                              expected: "string & MaxLength<2>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".tuple[2][" + _index1 + "]",
                          expected: "(string & MinLength<1> & MaxLength<2>)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[2]",
                      expected:
                        "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                      value: input.tuple[2],
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.tuple[3]) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[3]",
                      expected:
                        "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                      value: input.tuple[3],
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.tuple[3].length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[3]",
                        expected: "Array<> & MinItems<3>",
                        value: input.tuple[3],
                      },
                      errorFactory,
                    )) &&
                  (input.tuple[3].length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".tuple[3]",
                        expected: "Array<> & MaxItems<7>",
                        value: input.tuple[3],
                      },
                      errorFactory,
                    )) &&
                  input.tuple[3].every(
                    (elem: any, _index2: number) =>
                      ("number" === typeof elem &&
                        (1 <= elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".tuple[3][" + _index2 + "]",
                              expected: "number & Minimum<1>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (elem <= 2 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".tuple[3][" + _index2 + "]",
                              expected: "number & Maximum<2>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".tuple[3][" + _index2 + "]",
                          expected: "(number & Minimum<1> & Maximum<2>)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".tuple[3]",
                      expected:
                        "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                      value: input.tuple[3],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".tuple",
                  expected:
                    "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
                  value: input.tuple,
                },
                errorFactory,
              );
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagTuple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagTuple",
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
