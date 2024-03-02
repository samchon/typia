import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_assertQuery_ObjectHttpArray = _test_http_assertQuery(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)((input) =>
  ((
    input: string | URLSearchParams,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): typia.Resolved<ObjectHttpArray> => {
    const decode = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpArray> => {
      const $params = (typia.http.assertQuery as any).params;
      const $boolean = (typia.http.assertQuery as any).boolean;
      const $bigint = (typia.http.assertQuery as any).bigint;
      const $number = (typia.http.assertQuery as any).number;
      const $string = (typia.http.assertQuery as any).string;
      input = $params(input) as URLSearchParams;
      const output = {
        booleans: input.getAll("booleans").map((elem: any) => $boolean(elem)),
        bigints: input.getAll("bigints").map((elem: any) => $bigint(elem)),
        numbers: input.getAll("numbers").map((elem: any) => $number(elem)),
        strings: input.getAll("strings").map((elem: any) => $string(elem)),
        templates: input.getAll("templates").map((elem: any) => $string(elem)),
      };
      return output as any;
    };
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectHttpArray => {
      const __is = (input: any): input is ObjectHttpArray => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.booleans) &&
          input.booleans.every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input.bigints) &&
          input.bigints.every((elem: any) => "bigint" === typeof elem) &&
          Array.isArray(input.numbers) &&
          input.numbers.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input.strings) &&
          input.strings.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.templates) &&
          input.templates.every(
            (elem: any) =>
              "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectHttpArray => {
          const $guard = (typia.http.assertQuery as any).guard;
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
                      expected: "`something_${string}`",
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
              ));
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
      return input;
    };
    const output = decode(input);
    return assert(output, errorFactory) as any;
  })(input),
);
