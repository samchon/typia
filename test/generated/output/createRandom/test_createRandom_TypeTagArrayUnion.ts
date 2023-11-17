import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_createRandom_TypeTagArrayUnion = _test_random(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagArrayUnion as any)
      .RANDOM,
  ): typia.Resolved<TypeTagArrayUnion> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
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
      maxItems: (generator?.array ?? $generator.array)(
        () =>
          $pick([
            () =>
              (generator?.customs ?? $generator.customs)?.string?.([
                {
                  name: "MaxLength<7>",
                  kind: "maxLength",
                  value: 7,
                },
              ]) ??
              (generator?.string ?? $generator.string)(
                (generator?.integer ?? $generator.integer)(5, 7),
              ),
            () =>
              (generator?.customs ?? $generator.customs)?.number?.([
                {
                  name: "Maximum<7>",
                  kind: "maximum",
                  value: 7,
                },
              ]) ?? (generator?.number ?? $generator.number)(-3, 7),
          ])(),
        (generator?.integer ?? $generator.integer)(0, 7),
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
    });
    return (generator?.array ?? $generator.array)(() => $ro0());
  },
  assert: (input: any): TypeTagArrayUnion => {
    const __is = (input: any): input is TypeTagArrayUnion => {
      const $io0 = (input: any): boolean =>
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
        Array.isArray(input.maxItems) &&
        input.maxItems.length <= 7 &&
        input.maxItems.every(
          (elem: any) =>
            ("string" === typeof elem && elem.length <= 7) ||
            ("number" === typeof elem && Number.isFinite(elem) && elem <= 7),
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
        );
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagArrayUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
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
          (((Array.isArray(input.maxItems) ||
            $guard(_exceptionable, {
              path: _path + ".maxItems",
              expected:
                "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
              value: input.maxItems,
            })) &&
            (input.maxItems.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array<> & MaxItems<7>",
                value: input.maxItems,
              })) &&
            input.maxItems.every(
              (elem: any, _index4: number) =>
                ("string" === typeof elem &&
                  (elem.length <= 7 ||
                    $guard(_exceptionable, {
                      path: _path + ".maxItems[" + _index4 + "]",
                      expected: "string & MaxLength<7>",
                      value: elem,
                    }))) ||
                ("number" === typeof elem &&
                  (Number.isFinite(elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".maxItems[" + _index4 + "]",
                      expected: "number",
                      value: elem,
                    })) &&
                  (elem <= 7 ||
                    $guard(_exceptionable, {
                      path: _path + ".maxItems[" + _index4 + "]",
                      expected: "number & Maximum<7>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".maxItems[" + _index4 + "]",
                  expected: "((number & Maximum<7>) | (string & MaxLength<7>))",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".maxItems",
              expected:
                "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
              value: input.maxItems,
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
              (elem: any, _index5: number) =>
                ("string" === typeof elem &&
                  (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    elem,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + ".both[" + _index5 + "]",
                      expected: 'string & Format<"uuid">',
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".both[" + _index5 + "]",
                  expected: '(string & Format<"uuid">)',
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".both",
              expected:
                '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
              value: input.both,
            }));
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagArrayUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "TypeTagArrayUnion.Type",
                    value: elem,
                  })) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "TypeTagArrayUnion.Type",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagArrayUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
