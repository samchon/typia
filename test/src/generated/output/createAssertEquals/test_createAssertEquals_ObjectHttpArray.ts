import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_createAssertEquals_ObjectHttpArray = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
  (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): ObjectHttpArray => {
    const $guard = (typia.createAssertEquals as any).guard(errorFactory);
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHttpArray => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.booleans) &&
        input.booleans.every(
          (elem: any, _index1: number) => "boolean" === typeof elem,
        ) &&
        Array.isArray(input.bigints) &&
        input.bigints.every(
          (elem: any, _index2: number) => "bigint" === typeof elem,
        ) &&
        Array.isArray(input.numbers) &&
        input.numbers.every(
          (elem: any, _index3: number) =>
            "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input.strings) &&
        input.strings.every(
          (elem: any, _index4: number) => "string" === typeof elem,
        ) &&
        Array.isArray(input.templates) &&
        input.templates.every(
          (elem: any, _index5: number) =>
            "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
        ) &&
        (5 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["booleans", "bigints", "numbers", "strings", "templates"].some(
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
      ): input is ObjectHttpArray => {
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.booleans) ||
            $guard(_exceptionable, {
              path: _path + ".booleans",
              expected: "Array<boolean>",
              value: input.booleans,
            })) &&
            input.booleans.every(
              (elem: any, _index1: number) =>
                "boolean" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".booleans[" + _index1 + "]",
                  expected: "boolean",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".booleans",
              expected: "Array<boolean>",
              value: input.booleans,
            })) &&
          (((Array.isArray(input.bigints) ||
            $guard(_exceptionable, {
              path: _path + ".bigints",
              expected: "Array<bigint>",
              value: input.bigints,
            })) &&
            input.bigints.every(
              (elem: any, _index2: number) =>
                "bigint" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".bigints[" + _index2 + "]",
                  expected: "bigint",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".bigints",
              expected: "Array<bigint>",
              value: input.bigints,
            })) &&
          (((Array.isArray(input.numbers) ||
            $guard(_exceptionable, {
              path: _path + ".numbers",
              expected: "Array<number>",
              value: input.numbers,
            })) &&
            input.numbers.every(
              (elem: any, _index3: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".numbers[" + _index3 + "]",
                  expected: "number",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".numbers",
              expected: "Array<number>",
              value: input.numbers,
            })) &&
          (((Array.isArray(input.strings) ||
            $guard(_exceptionable, {
              path: _path + ".strings",
              expected: "Array<string>",
              value: input.strings,
            })) &&
            input.strings.every(
              (elem: any, _index4: number) =>
                "string" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".strings[" + _index4 + "]",
                  expected: "string",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".strings",
              expected: "Array<string>",
              value: input.strings,
            })) &&
          (((Array.isArray(input.templates) ||
            $guard(_exceptionable, {
              path: _path + ".templates",
              expected: "Array<`something_${string}`>",
              value: input.templates,
            })) &&
            input.templates.every(
              (elem: any, _index5: number) =>
                ("string" === typeof elem &&
                  RegExp(/^something_(.*)/).test(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".templates[" + _index5 + "]",
                  expected: "`something_${string}`",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".templates",
              expected: "Array<`something_${string}`>",
              value: input.templates,
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["booleans", "bigints", "numbers", "strings", "templates"].some(
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
              expected: "ObjectHttpArray",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpArray",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
);
