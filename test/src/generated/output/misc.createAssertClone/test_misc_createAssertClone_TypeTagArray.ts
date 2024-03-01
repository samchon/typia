import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_misc_createAssertClone_TypeTagArray = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
  (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): typia.Resolved<TypeTagArray> => {
    const assert = (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): TypeTagArray => {
      const $guard = (typia.misc.createAssertClone as any).guard(errorFactory);
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
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
    };
    const clone = (input: TypeTagArray): typia.Resolved<TypeTagArray> => {
      const $io1 = (input: any): boolean =>
        Array.isArray(input.items) &&
        3 <= input.items.length &&
        input.items.length <= 3 &&
        input.items.every(
          (elem: any) =>
            "string" === typeof elem &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.minItems) &&
        3 <= input.minItems.length &&
        input.minItems.every(
          (elem: any) => "number" === typeof elem && 3 <= elem,
        ) &&
        Array.isArray(input.both) &&
        3 <= input.both.length &&
        input.both.length <= 7 &&
        input.both.every(
          (elem: any) =>
            "string" === typeof elem &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              elem,
            ),
        ) &&
        Array.isArray(input.equal) &&
        10 <= input.equal.length &&
        input.equal.length <= 10 &&
        input.equal.every(
          (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
        );
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) => input.map((elem: any) => elem as any);
      const $cp2 = (input: any) => input.map((elem: any) => elem as any);
      const $cp3 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        value: Array.isArray(input.value)
          ? $cp0(input.value)
          : (input.value as any),
      });
      const $co1 = (input: any): any => ({
        items: Array.isArray(input.items)
          ? $cp1(input.items)
          : (input.items as any),
        minItems: Array.isArray(input.minItems)
          ? $cp2(input.minItems)
          : (input.minItems as any),
        both: Array.isArray(input.both)
          ? $cp1(input.both)
          : (input.both as any),
        equal: Array.isArray(input.equal)
          ? $cp3(input.equal)
          : (input.equal as any),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  },
);
