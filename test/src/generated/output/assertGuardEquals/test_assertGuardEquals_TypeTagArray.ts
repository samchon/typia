import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_assertGuardEquals_TypeTagArray = _test_assertGuardEquals(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  ((input: any): asserts input is TypeTagArray => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagArray => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.items) &&
        3 <= input.items.length &&
        input.items.length <= 3 &&
        input.items.every(
          (elem: any, _index2: number) =>
            "string" === typeof elem &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.minItems) &&
        3 <= input.minItems.length &&
        input.minItems.every(
          (elem: any, _index3: number) =>
            "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
        ) &&
        Array.isArray(input.both) &&
        3 <= input.both.length &&
        input.both.length <= 7 &&
        input.both.every(
          (elem: any, _index4: number) =>
            "string" === typeof elem &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.equal) &&
        10 <= input.equal.length &&
        input.equal.length <= 10 &&
        input.equal.every(
          (elem: any, _index5: number) =>
            "number" === typeof elem && 10 <= elem && elem <= 10,
        ) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["items", "minItems", "both", "equal"].some(
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
      ): input is TypeTagArray => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuardEquals",
        );
        const $join = require("typia/lib/functional/$join").$join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.value) ||
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
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
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
            })) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["items", "minItems", "both", "equal"].some(
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
  })(input),
);
