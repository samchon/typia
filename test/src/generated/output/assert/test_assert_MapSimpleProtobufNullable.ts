import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_assert_MapSimpleProtobufNullable = _test_assert(
  TypeGuardError,
)("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
  MapSimpleProtobufNullable,
)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): MapSimpleProtobufNullable => {
    const __is = (input: any): input is MapSimpleProtobufNullable => {
      const $io0 = (input: any): boolean =>
        (null === input.boolean ||
          (input.boolean instanceof Map &&
            (() =>
              [...input.boolean].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "boolean" === typeof elem[1],
              ))())) &&
        (null === input.int32 ||
          (input.int32 instanceof Map &&
            (() =>
              [...input.int32].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "number" === typeof elem[1] &&
                  Math.floor(elem[1]) === elem[1] &&
                  -2147483648 <= elem[1] &&
                  elem[1] <= 2147483647,
              ))())) &&
        (null === input.bigint ||
          (input.bigint instanceof Map &&
            (() =>
              [...input.bigint].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "bigint" === typeof elem[1],
              ))())) &&
        (null === input.double ||
          (input.double instanceof Map &&
            (() =>
              [...input.double].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "number" === typeof elem[1] &&
                  Number.isFinite(elem[1]),
              ))())) &&
        (null === input.string ||
          (input.string instanceof Map &&
            (() =>
              [...input.string].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "string" === typeof elem[1] &&
                  1 <= elem[1].length,
              ))())) &&
        (null === input.bytes ||
          (input.bytes instanceof Map &&
            (() =>
              [...input.bytes].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  elem[1] instanceof Uint8Array,
              ))())) &&
        (null === input.objects ||
          (input.objects instanceof Map &&
            (() =>
              [...input.objects].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "object" === typeof elem[1] &&
                  null !== elem[1] &&
                  $io0(elem[1]),
              ))()));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is MapSimpleProtobufNullable => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.boolean ||
            ((input.boolean instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean",
                  expected: "(Map<string, boolean> | null)",
                  value: input.boolean,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.boolean].every(
                  (elem: any, _index1: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "[string, boolean]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".boolean[" + _index1 + "]",
                            expected: "[string, boolean]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".boolean[" + _index1 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      ("boolean" === typeof elem[1] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".boolean[" + _index1 + "][1]",
                            expected: "boolean",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".boolean[" + _index1 + "]",
                        expected: "[string, boolean]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "(Map<string, boolean> | null)",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (null === input.int32 ||
            ((input.int32 instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".int32",
                  expected: '(Map<string, (number & Type<"int32">)> | null)',
                  value: input.int32,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.int32].every(
                  (elem: any, _index2: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32[" + _index2 + "]",
                          expected: '[string, (number & Type<"int32">)]',
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".int32[" + _index2 + "]",
                            expected: '[string, (number & Type<"int32">)]',
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".int32[" + _index2 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      (("number" === typeof elem[1] &&
                        ((Math.floor(elem[1]) === elem[1] &&
                          -2147483648 <= elem[1] &&
                          elem[1] <= 2147483647) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int32[" + _index2 + "][1]",
                              expected: 'number & Type<"int32">',
                              value: elem[1],
                            },
                            errorFactory,
                          ))) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".int32[" + _index2 + "][1]",
                            expected: '(number & Type<"int32">)',
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int32[" + _index2 + "]",
                        expected: '[string, (number & Type<"int32">)]',
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".int32",
                expected: '(Map<string, (number & Type<"int32">)> | null)',
                value: input.int32,
              },
              errorFactory,
            )) &&
          (null === input.bigint ||
            ((input.bigint instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigint",
                  expected: "(Map<string, bigint> | null)",
                  value: input.bigint,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.bigint].every(
                  (elem: any, _index3: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".bigint[" + _index3 + "]",
                          expected: "[string, bigint]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bigint[" + _index3 + "]",
                            expected: "[string, bigint]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bigint[" + _index3 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      ("bigint" === typeof elem[1] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bigint[" + _index3 + "][1]",
                            expected: "bigint",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bigint[" + _index3 + "]",
                        expected: "[string, bigint]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bigint",
                expected: "(Map<string, bigint> | null)",
                value: input.bigint,
              },
              errorFactory,
            )) &&
          (null === input.double ||
            ((input.double instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".double",
                  expected: "(Map<string, number> | null)",
                  value: input.double,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.double].every(
                  (elem: any, _index4: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double[" + _index4 + "]",
                          expected: "[string, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".double[" + _index4 + "]",
                            expected: "[string, number]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".double[" + _index4 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      (("number" === typeof elem[1] &&
                        Number.isFinite(elem[1])) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".double[" + _index4 + "][1]",
                            expected: "number",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".double[" + _index4 + "]",
                        expected: "[string, number]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".double",
                expected: "(Map<string, number> | null)",
                value: input.double,
              },
              errorFactory,
            )) &&
          (null === input.string ||
            ((input.string instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".string",
                  expected: "(Map<string, (string & MinLength<1>)> | null)",
                  value: input.string,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.string].every(
                  (elem: any, _index5: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".string[" + _index5 + "]",
                          expected: "[string, (string & MinLength<1>)]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".string[" + _index5 + "]",
                            expected: "[string, (string & MinLength<1>)]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".string[" + _index5 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      (("string" === typeof elem[1] &&
                        (1 <= elem[1].length ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".string[" + _index5 + "][1]",
                              expected: "string & MinLength<1>",
                              value: elem[1],
                            },
                            errorFactory,
                          ))) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".string[" + _index5 + "][1]",
                            expected: "(string & MinLength<1>)",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".string[" + _index5 + "]",
                        expected: "[string, (string & MinLength<1>)]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: "(Map<string, (string & MinLength<1>)> | null)",
                value: input.string,
              },
              errorFactory,
            )) &&
          (null === input.bytes ||
            ((input.bytes instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bytes",
                  expected: "(Map<string, Uint8Array> | null)",
                  value: input.bytes,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.bytes].every(
                  (elem: any, _index6: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".bytes[" + _index6 + "]",
                          expected: "[string, Uint8Array]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bytes[" + _index6 + "]",
                            expected: "[string, Uint8Array]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bytes[" + _index6 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      (elem[1] instanceof Uint8Array ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".bytes[" + _index6 + "][1]",
                            expected: "Uint8Array",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bytes[" + _index6 + "]",
                        expected: "[string, Uint8Array]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bytes",
                expected: "(Map<string, Uint8Array> | null)",
                value: input.bytes,
              },
              errorFactory,
            )) &&
          (null === input.objects ||
            ((input.objects instanceof Map ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".objects",
                  expected: "(Map<string, MapSimpleProtobufNullable> | null)",
                  value: input.objects,
                },
                errorFactory,
              )) &&
              (() =>
                [...input.objects].every(
                  (elem: any, _index7: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index7 + "]",
                          expected: "[string, MapSimpleProtobufNullable]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      (elem.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".objects[" + _index7 + "]",
                            expected: "[string, MapSimpleProtobufNullable]",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".objects[" + _index7 + "][0]",
                            expected: "string",
                            value: elem[0],
                          },
                          errorFactory,
                        )) &&
                      (((("object" === typeof elem[1] && null !== elem[1]) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".objects[" + _index7 + "][1]",
                            expected: "MapSimpleProtobufNullable",
                            value: elem[1],
                          },
                          errorFactory,
                        )) &&
                        $ao0(
                          elem[1],
                          _path + ".objects[" + _index7 + "][1]",
                          true && _exceptionable,
                        )) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".objects[" + _index7 + "][1]",
                            expected: "MapSimpleProtobufNullable",
                            value: elem[1],
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".objects[" + _index7 + "]",
                        expected: "[string, MapSimpleProtobufNullable]",
                        value: elem,
                      },
                      errorFactory,
                    ),
                ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".objects",
                expected: "(Map<string, MapSimpleProtobufNullable> | null)",
                value: input.objects,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "MapSimpleProtobufNullable",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "MapSimpleProtobufNullable",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
