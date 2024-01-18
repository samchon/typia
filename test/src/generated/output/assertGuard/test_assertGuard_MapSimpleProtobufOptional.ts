import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../../structures/MapSimpleProtobufOptional";

export const test_assertGuard_MapSimpleProtobufOptional = _test_assertGuard(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
  ((input: any): asserts input is MapSimpleProtobufOptional => {
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
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuard",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.boolean ||
            ((input.boolean instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "(Map<string, boolean> | undefined)",
                value: input.boolean,
              })) &&
              (() =>
                [...input.boolean].every(
                  (elem: any, _index1: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".boolean[" + _index1 + "]",
                        expected: "[string, boolean]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "[string, boolean]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".boolean[" + _index1 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      ("boolean" === typeof elem[1] ||
                        $guard(_exceptionable, {
                          path: _path + ".boolean[" + _index1 + "][1]",
                          expected: "boolean",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".boolean[" + _index1 + "]",
                      expected: "[string, boolean]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "(Map<string, boolean> | undefined)",
              value: input.boolean,
            })) &&
          (undefined === input.int32 ||
            ((input.int32 instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: '(Map<string, (number & Type<"int32">)> | undefined)',
                value: input.int32,
              })) &&
              (() =>
                [...input.int32].every(
                  (elem: any, _index2: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".int32[" + _index2 + "]",
                        expected: '[string, (number & Type<"int32">)]',
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".int32[" + _index2 + "]",
                          expected: '[string, (number & Type<"int32">)]',
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".int32[" + _index2 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      (("number" === typeof elem[1] &&
                        ((Math.floor(elem[1]) === elem[1] &&
                          -2147483648 <= elem[1] &&
                          elem[1] <= 2147483647) ||
                          $guard(_exceptionable, {
                            path: _path + ".int32[" + _index2 + "][1]",
                            expected: 'number & Type<"int32">',
                            value: elem[1],
                          }))) ||
                        $guard(_exceptionable, {
                          path: _path + ".int32[" + _index2 + "][1]",
                          expected: '(number & Type<"int32">)',
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".int32[" + _index2 + "]",
                      expected: '[string, (number & Type<"int32">)]',
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: '(Map<string, (number & Type<"int32">)> | undefined)',
              value: input.int32,
            })) &&
          (undefined === input.bigint ||
            ((input.bigint instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "(Map<string, bigint> | undefined)",
                value: input.bigint,
              })) &&
              (() =>
                [...input.bigint].every(
                  (elem: any, _index3: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".bigint[" + _index3 + "]",
                        expected: "[string, bigint]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".bigint[" + _index3 + "]",
                          expected: "[string, bigint]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".bigint[" + _index3 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      ("bigint" === typeof elem[1] ||
                        $guard(_exceptionable, {
                          path: _path + ".bigint[" + _index3 + "][1]",
                          expected: "bigint",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".bigint[" + _index3 + "]",
                      expected: "[string, bigint]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".bigint",
              expected: "(Map<string, bigint> | undefined)",
              value: input.bigint,
            })) &&
          (undefined === input.double ||
            ((input.double instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".double",
                expected: "(Map<string, number> | undefined)",
                value: input.double,
              })) &&
              (() =>
                [...input.double].every(
                  (elem: any, _index4: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".double[" + _index4 + "]",
                        expected: "[string, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".double[" + _index4 + "]",
                          expected: "[string, number]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".double[" + _index4 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      (("number" === typeof elem[1] &&
                        Number.isFinite(elem[1])) ||
                        $guard(_exceptionable, {
                          path: _path + ".double[" + _index4 + "][1]",
                          expected: "number",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".double[" + _index4 + "]",
                      expected: "[string, number]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".double",
              expected: "(Map<string, number> | undefined)",
              value: input.double,
            })) &&
          (undefined === input.string ||
            ((input.string instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "(Map<string, (string & MinLength<1>)> | undefined)",
                value: input.string,
              })) &&
              (() =>
                [...input.string].every(
                  (elem: any, _index5: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".string[" + _index5 + "]",
                        expected: "[string, (string & MinLength<1>)]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".string[" + _index5 + "]",
                          expected: "[string, (string & MinLength<1>)]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".string[" + _index5 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      (("string" === typeof elem[1] &&
                        (1 <= elem[1].length ||
                          $guard(_exceptionable, {
                            path: _path + ".string[" + _index5 + "][1]",
                            expected: "string & MinLength<1>",
                            value: elem[1],
                          }))) ||
                        $guard(_exceptionable, {
                          path: _path + ".string[" + _index5 + "][1]",
                          expected: "(string & MinLength<1>)",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".string[" + _index5 + "]",
                      expected: "[string, (string & MinLength<1>)]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "(Map<string, (string & MinLength<1>)> | undefined)",
              value: input.string,
            })) &&
          (undefined === input.bytes ||
            ((input.bytes instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".bytes",
                expected: "(Map<string, Uint8Array> | undefined)",
                value: input.bytes,
              })) &&
              (() =>
                [...input.bytes].every(
                  (elem: any, _index6: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".bytes[" + _index6 + "]",
                        expected: "[string, Uint8Array]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".bytes[" + _index6 + "]",
                          expected: "[string, Uint8Array]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".bytes[" + _index6 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      (elem[1] instanceof Uint8Array ||
                        $guard(_exceptionable, {
                          path: _path + ".bytes[" + _index6 + "][1]",
                          expected: "Uint8Array",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".bytes[" + _index6 + "]",
                      expected: "[string, Uint8Array]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".bytes",
              expected: "(Map<string, Uint8Array> | undefined)",
              value: input.bytes,
            })) &&
          (undefined === input.objects ||
            ((input.objects instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".objects",
                expected:
                  "(Map<string, MapSimpleProtobufOptional> | undefined)",
                value: input.objects,
              })) &&
              (() =>
                [...input.objects].every(
                  (elem: any, _index7: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "]",
                        expected: "[string, MapSimpleProtobufOptional]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "]",
                          expected: "[string, MapSimpleProtobufOptional]",
                          value: elem,
                        })) &&
                      ("string" === typeof elem[0] ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "][0]",
                          expected: "string",
                          value: elem[0],
                        })) &&
                      (((("object" === typeof elem[1] &&
                        null !== elem[1] &&
                        false === Array.isArray(elem[1])) ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "][1]",
                          expected: "MapSimpleProtobufOptional",
                          value: elem[1],
                        })) &&
                        $ao0(
                          elem[1],
                          _path + ".objects[" + _index7 + "][1]",
                          true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "][1]",
                          expected: "MapSimpleProtobufOptional",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".objects[" + _index7 + "]",
                      expected: "[string, MapSimpleProtobufOptional]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".objects",
              expected: "(Map<string, MapSimpleProtobufOptional> | undefined)",
              value: input.objects,
            }));
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "MapSimpleProtobufOptional",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "MapSimpleProtobufOptional",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
