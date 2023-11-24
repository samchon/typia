import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_validateEquals_ObjectHttpArray = _test_validateEquals(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  ((input: any): typia.IValidation<ObjectHttpArray> => {
    const errors = [] as any[];
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
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpArray => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((Array.isArray(input.booleans) ||
              $report(_exceptionable, {
                path: _path + ".booleans",
                expected: "Array<boolean>",
                value: input.booleans,
              })) &&
              input.booleans
                .map(
                  (elem: any, _index1: number) =>
                    "boolean" === typeof elem ||
                    $report(_exceptionable, {
                      path: _path + ".booleans[" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".booleans",
                expected: "Array<boolean>",
                value: input.booleans,
              }),
            ((Array.isArray(input.bigints) ||
              $report(_exceptionable, {
                path: _path + ".bigints",
                expected: "Array<bigint>",
                value: input.bigints,
              })) &&
              input.bigints
                .map(
                  (elem: any, _index2: number) =>
                    "bigint" === typeof elem ||
                    $report(_exceptionable, {
                      path: _path + ".bigints[" + _index2 + "]",
                      expected: "bigint",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".bigints",
                expected: "Array<bigint>",
                value: input.bigints,
              }),
            ((Array.isArray(input.numbers) ||
              $report(_exceptionable, {
                path: _path + ".numbers",
                expected: "Array<number>",
                value: input.numbers,
              })) &&
              input.numbers
                .map(
                  (elem: any, _index3: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $report(_exceptionable, {
                      path: _path + ".numbers[" + _index3 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".numbers",
                expected: "Array<number>",
                value: input.numbers,
              }),
            ((Array.isArray(input.strings) ||
              $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Array<string>",
                value: input.strings,
              })) &&
              input.strings
                .map(
                  (elem: any, _index4: number) =>
                    "string" === typeof elem ||
                    $report(_exceptionable, {
                      path: _path + ".strings[" + _index4 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Array<string>",
                value: input.strings,
              }),
            ((Array.isArray(input.templates) ||
              $report(_exceptionable, {
                path: _path + ".templates",
                expected: "Array<`something_${string}`>",
                value: input.templates,
              })) &&
              input.templates
                .map(
                  (elem: any, _index5: number) =>
                    ("string" === typeof elem &&
                      RegExp(/^something_(.*)/).test(elem)) ||
                    $report(_exceptionable, {
                      path: _path + ".templates[" + _index5 + "]",
                      expected: "`something_${string}`",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".templates",
                expected: "Array<`something_${string}`>",
                value: input.templates,
              }),
            5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    [
                      "booleans",
                      "bigints",
                      "numbers",
                      "strings",
                      "templates",
                    ].some((prop: any) => key === prop)
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
              expected: "ObjectHttpArray",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectHttpArray",
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
  })(input),
);
