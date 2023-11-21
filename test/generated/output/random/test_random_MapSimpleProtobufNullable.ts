import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_random_MapSimpleProtobufNullable = _test_random(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<MapSimpleProtobufNullable> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = true, _depth: number = 0): any => ({
        boolean: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    (generator?.boolean ?? $generator.boolean)(),
                  ])
                : [],
            ),
        ])(),
        int32: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    (generator?.customs ?? $generator.customs)?.number?.([
                      {
                        name: 'Type<"int32">',
                        kind: "type",
                        value: "int32",
                      },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
                  ])
                : [],
            ),
        ])(),
        bigint: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
                      (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(100),
                      ),
                  ])
                : [],
            ),
        ])(),
        double: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                      (generator?.number ?? $generator.number)(0, 100),
                  ])
                : [],
            ),
        ])(),
        string: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    (generator?.customs ?? $generator.customs)?.string?.([
                      {
                        name: "MinLength<1>",
                        kind: "minLength",
                        value: 1,
                      },
                    ]) ??
                      (generator?.string ?? $generator.string)(
                        (generator?.integer ?? $generator.integer)(1, 25),
                      ),
                  ])
                : [],
            ),
        ])(),
        bytes: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    new Uint8Array(
                      (generator?.array ?? $generator.array)((): any =>
                        (generator?.integer ?? $generator.integer)(0, 255),
                      ),
                    ),
                  ])
                : [],
            ),
        ])(),
        objects: $pick([
          () => null,
          () =>
            new Map(
              _recursive && 5 < _depth
                ? []
                : 5 >= _depth
                ? (generator?.array ?? $generator.array)(() => [
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                      (generator?.string ?? $generator.string)(),
                    $ro0(true, _recursive ? 1 + _depth : _depth),
                  ])
                : [],
            ),
        ])(),
      });
      return $ro0();
    })((MapSimpleProtobufNullable as any).RANDOM),
  assert: (input: any): MapSimpleProtobufNullable => {
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
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.boolean ||
            ((input.boolean instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "(Map<string, boolean> | null)",
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
              expected: "(Map<string, boolean> | null)",
              value: input.boolean,
            })) &&
          (null === input.int32 ||
            ((input.int32 instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: '(Map<string, (number & Type<"int32">)> | null)',
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
              expected: '(Map<string, (number & Type<"int32">)> | null)',
              value: input.int32,
            })) &&
          (null === input.bigint ||
            ((input.bigint instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "(Map<string, bigint> | null)",
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
              expected: "(Map<string, bigint> | null)",
              value: input.bigint,
            })) &&
          (null === input.double ||
            ((input.double instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".double",
                expected: "(Map<string, number> | null)",
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
              expected: "(Map<string, number> | null)",
              value: input.double,
            })) &&
          (null === input.string ||
            ((input.string instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "(Map<string, (string & MinLength<1>)> | null)",
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
              expected: "(Map<string, (string & MinLength<1>)> | null)",
              value: input.string,
            })) &&
          (null === input.bytes ||
            ((input.bytes instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".bytes",
                expected: "(Map<string, Uint8Array> | null)",
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
              expected: "(Map<string, Uint8Array> | null)",
              value: input.bytes,
            })) &&
          (null === input.objects ||
            ((input.objects instanceof Map ||
              $guard(_exceptionable, {
                path: _path + ".objects",
                expected: "(Map<string, MapSimpleProtobufNullable> | null)",
                value: input.objects,
              })) &&
              (() =>
                [...input.objects].every(
                  (elem: any, _index7: number) =>
                    ((Array.isArray(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "]",
                        expected: "[string, MapSimpleProtobufNullable]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "]",
                          expected: "[string, MapSimpleProtobufNullable]",
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
                          expected: "MapSimpleProtobufNullable",
                          value: elem[1],
                        })) &&
                        $ao0(
                          elem[1],
                          _path + ".objects[" + _index7 + "][1]",
                          true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "][1]",
                          expected: "MapSimpleProtobufNullable",
                          value: elem[1],
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".objects[" + _index7 + "]",
                      expected: "[string, MapSimpleProtobufNullable]",
                      value: elem,
                    }),
                ))()) ||
            $guard(_exceptionable, {
              path: _path + ".objects",
              expected: "(Map<string, MapSimpleProtobufNullable> | null)",
              value: input.objects,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "MapSimpleProtobufNullable",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "MapSimpleProtobufNullable",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
