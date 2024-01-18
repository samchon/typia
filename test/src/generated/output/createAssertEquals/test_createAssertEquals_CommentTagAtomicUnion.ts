import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_createAssertEquals_CommentTagAtomicUnion = _test_assertEquals(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  (input: any): CommentTagAtomicUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is CommentTagAtomicUnion => {
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
        (("string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7) ||
          ("number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value)) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
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
      ): input is CommentTagAtomicUnion => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssertEquals",
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
              expected: "Array<CommentTagAtomicUnion.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "CommentTagAtomicUnion.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "CommentTagAtomicUnion.Type",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<CommentTagAtomicUnion.Type>",
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
          (("string" === typeof input.value &&
            (3 <= input.value.length ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MinLength<3>",
                value: input.value,
              })) &&
            (input.value.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MaxLength<7>",
                value: input.value,
              }))) ||
            ("number" === typeof input.value &&
              (Number.isFinite(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                })) &&
              (3 <= input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
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
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagAtomicUnion",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagAtomicUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
);
