import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_createRandom_TypeTagArray = _test_random(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagArray as any).RANDOM,
  ): typia.Resolved<TypeTagArray> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value: (generator?.array ?? $generator.array)(() =>
        $ro1(_recursive, _recursive ? 1 + _depth : _depth),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      items: (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"uuid">',
              kind: "format",
              value: "uuid",
            },
          ]) ?? (generator?.uuid ?? $generator.uuid)(),
        (generator?.integer ?? $generator.integer)(3, 3),
      ),
      minItems: (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Minimum<3>",
              kind: "minimum",
              value: 3,
            },
          ]) ?? (generator?.number ?? $generator.number)(3, 13),
        (generator?.integer ?? $generator.integer)(3, 3),
      ),
      both: (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"uuid">',
              kind: "format",
              value: "uuid",
            },
          ]) ?? (generator?.uuid ?? $generator.uuid)(),
        (generator?.integer ?? $generator.integer)(3, 7),
      ),
      equal: (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Minimum<10>",
              kind: "minimum",
              value: 10,
            },
            {
              name: "Maximum<10>",
              kind: "maximum",
              value: 10,
            },
          ]) ?? (generator?.number ?? $generator.number)(10, 10),
        (generator?.integer ?? $generator.integer)(10, 10),
      ),
    });
    return $ro0();
  },
  assert: (input: any): TypeTagArray => {
    const __is = (input: any): input is TypeTagArray => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        Array.isArray(input.items) &&
        3 <= input.items.length &&
        input.items.length <= 3 &&
        input.items.every(
          (elem: any) =>
            "string" === typeof elem &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.minItems) &&
        3 <= input.minItems.length &&
        input.minItems.every(
          (elem: any) =>
            "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
        ) &&
        Array.isArray(input.both) &&
        3 <= input.both.length &&
        input.both.length <= 7 &&
        input.both.every(
          (elem: any) =>
            "string" === typeof elem &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.equal) &&
        10 <= input.equal.length &&
        input.equal.length <= 10 &&
        input.equal.every(
          (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagArray => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<TypeTagArray.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TypeTagArray.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "TypeTagArray.Type",
                  value: elem,
                }),
            )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<TypeTagArray.Type>",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.items) ||
            $guard(_exceptionable, {
              path: _path + ".items",
              expected:
                '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
              value: input.items,
            })) &&
            (3 <= input.items.length ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<> & MinItems<3>",
                value: input.items,
              })) &&
            (input.items.length <= 3 ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<> & MaxItems<3>",
                value: input.items,
              })) &&
            input.items.every(
              (elem: any, _index2: number) =>
                ("string" === typeof elem &&
                  (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    elem,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + ".items[" + _index2 + "]",
                      expected: 'string & Format<"uuid">',
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".items[" + _index2 + "]",
                  expected: '(string & Format<"uuid">)',
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".items",
              expected:
                '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
              value: input.items,
            })) &&
          (((Array.isArray(input.minItems) ||
            $guard(_exceptionable, {
              path: _path + ".minItems",
              expected: "(Array<number & Minimum<3>> & MinItems<3>)",
              value: input.minItems,
            })) &&
            (3 <= input.minItems.length ||
              $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array<> & MinItems<3>",
                value: input.minItems,
              })) &&
            input.minItems.every(
              (elem: any, _index3: number) =>
                ("number" === typeof elem &&
                  (Number.isFinite(elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".minItems[" + _index3 + "]",
                      expected: "number",
                      value: elem,
                    })) &&
                  (3 <= elem ||
                    $guard(_exceptionable, {
                      path: _path + ".minItems[" + _index3 + "]",
                      expected: "number & Minimum<3>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".minItems[" + _index3 + "]",
                  expected: "(number & Minimum<3>)",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".minItems",
              expected: "(Array<number & Minimum<3>> & MinItems<3>)",
              value: input.minItems,
            })) &&
          (((Array.isArray(input.both) ||
            $guard(_exceptionable, {
              path: _path + ".both",
              expected:
                '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
              value: input.both,
            })) &&
            (3 <= input.both.length ||
              $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array<> & MinItems<3>",
                value: input.both,
              })) &&
            (input.both.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array<> & MaxItems<7>",
                value: input.both,
              })) &&
            input.both.every(
              (elem: any, _index4: number) =>
                ("string" === typeof elem &&
                  (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    elem,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + ".both[" + _index4 + "]",
                      expected: 'string & Format<"uuid">',
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".both[" + _index4 + "]",
                  expected: '(string & Format<"uuid">)',
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".both",
              expected:
                '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
              value: input.both,
            })) &&
          (((Array.isArray(input.equal) ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected:
                "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
              value: input.equal,
            })) &&
            (10 <= input.equal.length ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "Array<> & MinItems<10>",
                value: input.equal,
              })) &&
            (input.equal.length <= 10 ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "Array<> & MaxItems<10>",
                value: input.equal,
              })) &&
            input.equal.every(
              (elem: any, _index5: number) =>
                ("number" === typeof elem &&
                  (10 <= elem ||
                    $guard(_exceptionable, {
                      path: _path + ".equal[" + _index5 + "]",
                      expected: "number & Minimum<10>",
                      value: elem,
                    })) &&
                  (elem <= 10 ||
                    $guard(_exceptionable, {
                      path: _path + ".equal[" + _index5 + "]",
                      expected: "number & Maximum<10>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".equal[" + _index5 + "]",
                  expected: "(number & Minimum<10> & Maximum<10>)",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected:
                "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
              value: input.equal,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagArray",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagArray",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
