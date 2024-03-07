import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufOptional } from "../../../structures/MapSimpleProtobufOptional";
import { TypeGuardError } from "typia";
export const test_functional_assertReturn_MapSimpleProtobufOptional =
  _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )(
    (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
      (input: MapSimpleProtobufOptional): MapSimpleProtobufOptional => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): MapSimpleProtobufOptional => {
          const __is = (input: any): input is MapSimpleProtobufOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                (input.boolean instanceof Map &&
                  (() =>
                    [...input.boolean].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "boolean" === typeof elem[1],
                    ))())) &&
              (undefined === input.int32 ||
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
              (undefined === input.bigint ||
                (input.bigint instanceof Map &&
                  (() =>
                    [...input.bigint].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "bigint" === typeof elem[1],
                    ))())) &&
              (undefined === input.double ||
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
              (undefined === input.string ||
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
              (undefined === input.bytes ||
                (input.bytes instanceof Map &&
                  (() =>
                    [...input.bytes].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        elem[1] instanceof Uint8Array,
                    ))())) &&
              (undefined === input.objects ||
                (input.objects instanceof Map &&
                  (() =>
                    [...input.objects].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "object" === typeof elem[1] &&
                        null !== elem[1] &&
                        false === Array.isArray(elem[1]) &&
                        $io0(elem[1]),
                    ))()));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is MapSimpleProtobufOptional => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.boolean ||
                  ((input.boolean instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".boolean",
                        expected: "(Map<string, boolean> | undefined)",
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
                      expected: "(Map<string, boolean> | undefined)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int32 ||
                  ((input.int32 instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int32",
                        expected:
                          '(Map<string, (number & Type<"int32">)> | undefined)',
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
                                  expected:
                                    '[string, (number & Type<"int32">)]',
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
                      expected:
                        '(Map<string, (number & Type<"int32">)> | undefined)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bigint ||
                  ((input.bigint instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bigint",
                        expected: "(Map<string, bigint> | undefined)",
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
                      expected: "(Map<string, bigint> | undefined)",
                      value: input.bigint,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.double ||
                  ((input.double instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".double",
                        expected: "(Map<string, number> | undefined)",
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
                      expected: "(Map<string, number> | undefined)",
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.string ||
                  ((input.string instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".string",
                        expected:
                          "(Map<string, (string & MinLength<1>)> | undefined)",
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
                      expected:
                        "(Map<string, (string & MinLength<1>)> | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bytes ||
                  ((input.bytes instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bytes",
                        expected: "(Map<string, Uint8Array> | undefined)",
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
                      expected: "(Map<string, Uint8Array> | undefined)",
                      value: input.bytes,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.objects ||
                  ((input.objects instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".objects",
                        expected:
                          "(Map<string, MapSimpleProtobufOptional> | undefined)",
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
                                expected: "[string, MapSimpleProtobufOptional]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "]",
                                  expected:
                                    "[string, MapSimpleProtobufOptional]",
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
                            (((("object" === typeof elem[1] &&
                              null !== elem[1] &&
                              false === Array.isArray(elem[1])) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "][1]",
                                  expected: "MapSimpleProtobufOptional",
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
                                  expected: "MapSimpleProtobufOptional",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".objects[" + _index7 + "]",
                              expected: "[string, MapSimpleProtobufOptional]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".objects",
                      expected:
                        "(Map<string, MapSimpleProtobufOptional> | undefined)",
                      value: input.objects,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "MapSimpleProtobufOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "MapSimpleProtobufOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
