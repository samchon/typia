import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_assertGuard_CommentTagArrayUnion = _test_assertGuard(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  ((input: any): asserts input is CommentTagArrayUnion => {
    const __is = (input: any): input is CommentTagArrayUnion => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.items) &&
        3 <= input.items.length &&
        input.items.length <= 3 &&
        input.items.every((elem: any) => "string" === typeof elem) &&
        Array.isArray(input.minItems) &&
        3 <= input.minItems.length &&
        input.minItems.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input.maxItems) &&
        input.maxItems.length <= 7 &&
        input.maxItems.every(
          (elem: any) =>
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)),
        ) &&
        Array.isArray(input.both) &&
        3 <= input.both.length &&
        input.both.length <= 7 &&
        input.both.every((elem: any) => "string" === typeof elem);
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
      ): input is CommentTagArrayUnion => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
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
          (((Array.isArray(input.maxItems) ||
            $guard(_exceptionable, {
              path: _path + ".maxItems",
              expected: "(Array<string | number> & MaxItems<7>)",
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
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".maxItems[" + _index4 + "]",
                  expected: "(number | string)",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".maxItems",
              expected: "(Array<string | number> & MaxItems<7>)",
              value: input.maxItems,
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
              (elem: any, _index5: number) =>
                "string" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".both[" + _index5 + "]",
                  expected: "string",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".both",
              expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
              value: input.both,
            }));
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagArrayUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "CommentTagArrayUnion.Type",
                    value: elem,
                  })) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "CommentTagArrayUnion.Type",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagArrayUnion",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
