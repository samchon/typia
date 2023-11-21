import typia from "../../../../src";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_assertGuard_MapSimpleProtobuf = _test_assertGuard(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)((input) =>
  ((input: any): asserts input is MapSimpleProtobuf => {
    const __is = (input: any): input is MapSimpleProtobuf => {
      const $io0 = (input: any): boolean =>
        input.boolean instanceof Map &&
        (() =>
          [...input.boolean].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              "boolean" === typeof elem[1],
          ))() &&
        input.int32 instanceof Map &&
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
          ))() &&
        input.bigint instanceof Map &&
        (() =>
          [...input.bigint].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              "bigint" === typeof elem[1],
          ))() &&
        input.double instanceof Map &&
        (() =>
          [...input.double].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              "number" === typeof elem[1] &&
              Number.isFinite(elem[1]),
          ))() &&
        input.string instanceof Map &&
        (() =>
          [...input.string].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              "string" === typeof elem[1] &&
              1 <= elem[1].length,
          ))() &&
        input.bytes instanceof Map &&
        (() =>
          [...input.bytes].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              elem[1] instanceof Uint8Array,
          ))() &&
        input.objects instanceof Map &&
        (() =>
          [...input.objects].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 2 &&
              "string" === typeof elem[0] &&
              "object" === typeof elem[1] &&
              null !== elem[1] &&
              $io0(elem[1]),
          ))();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is MapSimpleProtobuf => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((input.boolean instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "Map<string, boolean>",
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
              expected: "Map<string, boolean>",
              value: input.boolean,
            })) &&
          (((input.int32 instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: 'Map<string, (number & Type<"int32">)>',
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
              expected: 'Map<string, (number & Type<"int32">)>',
              value: input.int32,
            })) &&
          (((input.bigint instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".bigint",
              expected: "Map<string, bigint>",
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
              expected: "Map<string, bigint>",
              value: input.bigint,
            })) &&
          (((input.double instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".double",
              expected: "Map<string, number>",
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
              expected: "Map<string, number>",
              value: input.double,
            })) &&
          (((input.string instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "Map<string, (string & MinLength<1>)>",
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
              expected: "Map<string, (string & MinLength<1>)>",
              value: input.string,
            })) &&
          (((input.bytes instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".bytes",
              expected: "Map<string, Uint8Array>",
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
              expected: "Map<string, Uint8Array>",
              value: input.bytes,
            })) &&
          (((input.objects instanceof Map ||
            $guard(_exceptionable, {
              path: _path + ".objects",
              expected: "Map<string, MapSimpleProtobuf>",
              value: input.objects,
            })) &&
            (() =>
              [...input.objects].every(
                (elem: any, _index7: number) =>
                  ((Array.isArray(elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".objects[" + _index7 + "]",
                      expected: "[string, MapSimpleProtobuf]",
                      value: elem,
                    })) &&
                    (elem.length === 2 ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "]",
                        expected: "[string, MapSimpleProtobuf]",
                        value: elem,
                      })) &&
                    ("string" === typeof elem[0] ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "][0]",
                        expected: "string",
                        value: elem[0],
                      })) &&
                    (((("object" === typeof elem[1] && null !== elem[1]) ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "][1]",
                        expected: "MapSimpleProtobuf",
                        value: elem[1],
                      })) &&
                      $ao0(
                        elem[1],
                        _path + ".objects[" + _index7 + "][1]",
                        true && _exceptionable,
                      )) ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "][1]",
                        expected: "MapSimpleProtobuf",
                        value: elem[1],
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".objects[" + _index7 + "]",
                    expected: "[string, MapSimpleProtobuf]",
                    value: elem,
                  }),
              ))()) ||
            $guard(_exceptionable, {
              path: _path + ".objects",
              expected: "Map<string, MapSimpleProtobuf>",
              value: input.objects,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "MapSimpleProtobuf",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "MapSimpleProtobuf",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
