import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_random_ObjectHttpTypeTag = _test_random(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectHttpTypeTag> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        int32:
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        uint64:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
        uuid:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Format<"uuid">',
              kind: "format",
              value: "uuid",
            },
          ]) ?? (generator?.uuid ?? $generator.uuid)(),
        range: (generator?.array ?? $generator.array)(
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([
              {
                name: "Minimum<3>",
                kind: "minimum",
                value: 3,
              },
              {
                name: "Maximum<7>",
                kind: "maximum",
                value: 7,
              },
            ]) ?? (generator?.number ?? $generator.number)(3, 7),
          (generator?.integer ?? $generator.integer)(10, 100),
        ),
        length: (generator?.array ?? $generator.array)(
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([
              {
                name: "MinLength<3>",
                kind: "minLength",
                value: 3,
              },
              {
                name: "MaxLength<7>",
                kind: "maxLength",
                value: 7,
              },
            ]) ??
            (generator?.string ?? $generator.string)(
              (generator?.integer ?? $generator.integer)(3, 7),
            ),
          (generator?.integer ?? $generator.integer)(10, 100),
        ),
      });
      return $ro0();
    })((ObjectHttpTypeTag as any).RANDOM),
  assert: (input: any): ObjectHttpTypeTag => {
    const __is = (input: any): input is ObjectHttpTypeTag => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.int32 &&
        Math.floor(input.int32) === input.int32 &&
        -2147483648 <= input.int32 &&
        input.int32 <= 2147483647 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        "string" === typeof input.uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
          input.uuid,
        ) &&
        Array.isArray(input.range) &&
        10 <= input.range.length &&
        input.range.length <= 100 &&
        input.range.every(
          (elem: any) => "number" === typeof elem && 3 <= elem && elem <= 7,
        ) &&
        Array.isArray(input.length) &&
        10 <= input.length.length &&
        input.length.length <= 100 &&
        input.length.every(
          (elem: any) =>
            "string" === typeof elem && 3 <= elem.length && elem.length <= 7,
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpTypeTag => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.int32 &&
            ((Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: 'number & Type<"int32">',
                value: input.int32,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: '(number & Type<"int32">)',
              value: input.int32,
            })) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'bigint & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(bigint & Type<"uint64">)',
              value: input.uint64,
            })) &&
          (("string" === typeof input.uuid &&
            (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              input.uuid,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".uuid",
                expected: 'string & Format<"uuid">',
                value: input.uuid,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uuid",
              expected: '(string & Format<"uuid">)',
              value: input.uuid,
            })) &&
          (((Array.isArray(input.range) ||
            $guard(_exceptionable, {
              path: _path + ".range",
              expected:
                "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
              value: input.range,
            })) &&
            (10 <= input.range.length ||
              $guard(_exceptionable, {
                path: _path + ".range",
                expected: "Array<> & MinItems<10>",
                value: input.range,
              })) &&
            (input.range.length <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".range",
                expected: "Array<> & MaxItems<100>",
                value: input.range,
              })) &&
            input.range.every(
              (elem: any, _index1: number) =>
                ("number" === typeof elem &&
                  (3 <= elem ||
                    $guard(_exceptionable, {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "number & Minimum<3>",
                      value: elem,
                    })) &&
                  (elem <= 7 ||
                    $guard(_exceptionable, {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "number & Maximum<7>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".range[" + _index1 + "]",
                  expected: "(number & Minimum<3> & Maximum<7>)",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".range",
              expected:
                "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
              value: input.range,
            })) &&
          (((Array.isArray(input.length) ||
            $guard(_exceptionable, {
              path: _path + ".length",
              expected:
                "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
              value: input.length,
            })) &&
            (10 <= input.length.length ||
              $guard(_exceptionable, {
                path: _path + ".length",
                expected: "Array<> & MinItems<10>",
                value: input.length,
              })) &&
            (input.length.length <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".length",
                expected: "Array<> & MaxItems<100>",
                value: input.length,
              })) &&
            input.length.every(
              (elem: any, _index2: number) =>
                ("string" === typeof elem &&
                  (3 <= elem.length ||
                    $guard(_exceptionable, {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "string & MinLength<3>",
                      value: elem,
                    })) &&
                  (elem.length <= 7 ||
                    $guard(_exceptionable, {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "string & MaxLength<7>",
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".length[" + _index2 + "]",
                  expected: "(string & MinLength<3> & MaxLength<7>)",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".length",
              expected:
                "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
              value: input.length,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpTypeTag",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpTypeTag",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
