import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_createAssertGuardEqualsCustom_ObjectHttpArray =
  _test_assertGuardEquals(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is ObjectHttpArray => {
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
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.booleans) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Array<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
              input.booleans.every(
                (elem: any, _index1: number) =>
                  "boolean" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".booleans[" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".booleans",
                  expected: "Array<boolean>",
                  value: input.booleans,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.bigints) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigints",
                  expected: "Array<bigint>",
                  value: input.bigints,
                },
                errorFactory,
              )) &&
              input.bigints.every(
                (elem: any, _index2: number) =>
                  "bigint" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigints[" + _index2 + "]",
                      expected: "bigint",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigints",
                  expected: "Array<bigint>",
                  value: input.bigints,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.numbers) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Array<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
              input.numbers.every(
                (elem: any, _index3: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".numbers[" + _index3 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".numbers",
                  expected: "Array<number>",
                  value: input.numbers,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.strings) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Array<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
              input.strings.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".strings[" + _index4 + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".strings",
                  expected: "Array<string>",
                  value: input.strings,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.templates) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".templates",
                  expected: "Array<`something_${string}`>",
                  value: input.templates,
                },
                errorFactory,
              )) &&
              input.templates.every(
                (elem: any, _index5: number) =>
                  ("string" === typeof elem &&
                    RegExp(/^something_(.*)/).test(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".templates[" + _index5 + "]",
                      expected: "`[object Object]${string}`",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".templates",
                  expected: "Array<`something_${string}`>",
                  value: input.templates,
                },
                errorFactory,
              )) &&
            (5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
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
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpArray",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpArray",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
