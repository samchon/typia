import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_createValidateEquals_ObjectHttpTypeTag = _test_validateEquals(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  (input: any): typia.IValidation<ObjectHttpTypeTag> => {
    const errors = [] as any[];
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
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
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
    if (false === __is(input)) {
      const $report = (typia.createValidateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpTypeTag => {
        const $join = (typia.createValidateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.int32 &&
              ((Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647) ||
                $report(_exceptionable, {
                  path: _path + ".int32",
                  expected: 'number & Type<"int32">',
                  value: input.int32,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".int32",
                expected: '(number & Type<"int32">)',
                value: input.int32,
              }),
            ("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $report(_exceptionable, {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uint64",
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              }),
            ("string" === typeof input.uuid &&
              (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input.uuid,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".uuid",
                  expected: 'string & Format<"uuid">',
                  value: input.uuid,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uuid",
                expected: '(string & Format<"uuid">)',
                value: input.uuid,
              }),
            ((Array.isArray(input.range) ||
              $report(_exceptionable, {
                path: _path + ".range",
                expected:
                  "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                value: input.range,
              })) &&
              (10 <= input.range.length ||
                $report(_exceptionable, {
                  path: _path + ".range",
                  expected: "Array<> & MinItems<10>",
                  value: input.range,
                })) &&
              (input.range.length <= 100 ||
                $report(_exceptionable, {
                  path: _path + ".range",
                  expected: "Array<> & MaxItems<100>",
                  value: input.range,
                })) &&
              input.range
                .map(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem &&
                      (3 <= elem ||
                        $report(_exceptionable, {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Minimum<3>",
                          value: elem,
                        })) &&
                      (elem <= 7 ||
                        $report(_exceptionable, {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Maximum<7>",
                          value: elem,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "(number & Minimum<3> & Maximum<7>)",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".range",
                expected:
                  "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                value: input.range,
              }),
            ((Array.isArray(input.length) ||
              $report(_exceptionable, {
                path: _path + ".length",
                expected:
                  "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                value: input.length,
              })) &&
              (10 <= input.length.length ||
                $report(_exceptionable, {
                  path: _path + ".length",
                  expected: "Array<> & MinItems<10>",
                  value: input.length,
                })) &&
              (input.length.length <= 100 ||
                $report(_exceptionable, {
                  path: _path + ".length",
                  expected: "Array<> & MaxItems<100>",
                  value: input.length,
                })) &&
              input.length
                .map(
                  (elem: any, _index2: number) =>
                    ("string" === typeof elem &&
                      (3 <= elem.length ||
                        $report(_exceptionable, {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MinLength<3>",
                          value: elem,
                        })) &&
                      (elem.length <= 7 ||
                        $report(_exceptionable, {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MaxLength<7>",
                          value: elem,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".length",
                expected:
                  "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                value: input.length,
              }),
            5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    ["int32", "uint64", "uuid", "range", "length"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectHttpTypeTag",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectHttpTypeTag",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  },
);
