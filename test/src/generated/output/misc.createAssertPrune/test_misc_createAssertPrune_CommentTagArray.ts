import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_misc_createAssertPrune_CommentTagArray =
  _test_misc_assertPrune("CommentTagArray")<CommentTagArray>(CommentTagArray)(
    (input: any): CommentTagArray => {
      const assert = (input: any): CommentTagArray => {
        const __is = (input: any): input is CommentTagArray => {
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
            input.items.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            input.equal.length <= 10 &&
            input.equal.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagArray => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.misc.createAssertPrune",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<CommentTagArray.Type>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "CommentTagArray.Type",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "CommentTagArray.Type",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<CommentTagArray.Type>",
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
                  expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
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
                    "string" === typeof elem ||
                    $guard(_exceptionable, {
                      path: _path + ".items[" + _index2 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                  value: input.items,
                })) &&
              (((Array.isArray(input.minItems) ||
                $guard(_exceptionable, {
                  path: _path + ".minItems",
                  expected: "(Array<number> & MinItems<3>)",
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
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".minItems[" + _index3 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".minItems",
                  expected: "(Array<number> & MinItems<3>)",
                  value: input.minItems,
                })) &&
              (((Array.isArray(input.both) ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
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
                    "string" === typeof elem ||
                    $guard(_exceptionable, {
                      path: _path + ".both[" + _index4 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                  value: input.both,
                })) &&
              (((Array.isArray(input.equal) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "(Array<number> & MinItems<10> & MaxItems<10>)",
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
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".equal[" + _index5 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "(Array<number> & MinItems<10> & MaxItems<10>)",
                  value: input.equal,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "CommentTagArray",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagArray",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: CommentTagArray): void => {
        const $io1 = (input: any): boolean =>
          Array.isArray(input.items) &&
          3 <= input.items.length &&
          input.items.length <= 3 &&
          input.items.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every((elem: any) => "number" === typeof elem) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.equal) &&
          10 <= input.equal.length &&
          input.equal.length <= 10 &&
          input.equal.every((elem: any) => "number" === typeof elem);
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
          });
        const $po0 = (input: any): any => {
          if (Array.isArray(input.value)) $pp0(input.value);
          for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "items" === key ||
              "minItems" === key ||
              "both" === key ||
              "equal" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input);
      prune(input);
      return input;
    },
  );
