import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_createAssertGuardEquals_ObjectHttpTypeTag =
  _test_assertGuardEquals("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )((input: any): asserts input is ObjectHttpTypeTag => {
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
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpTypeTag => {
        const $guard = (typia.createAssertGuardEquals as any).guard;
        const $join = (typia.createAssertGuardEquals as any).join;
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
            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["int32", "uint64", "uuid", "range", "length"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
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
  });
