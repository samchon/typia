import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_validateEquals_ObjectHttpUndefindable = _test_validateEquals(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  ((input: any): typia.IValidation<ObjectHttpUndefindable> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHttpUndefindable => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.bigint || "bigint" === typeof input.bigint) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.constantBoolean ||
          true === input.constantBoolean) &&
        (undefined === input.constantBigint ||
          BigInt(1) === input.constantBigint ||
          BigInt(2) === input.constantBigint ||
          BigInt(3) === input.constantBigint) &&
        (undefined === input.constantNumber ||
          3 === input.constantNumber ||
          2 === input.constantNumber ||
          1 === input.constantNumber) &&
        (undefined === input.constantString ||
          "three" === input.constantString ||
          "two" === input.constantString ||
          "one" === input.constantString) &&
        (0 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "boolean",
                "bigint",
                "number",
                "string",
                "constantBoolean",
                "constantBigint",
                "constantNumber",
                "constantString",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input, true)
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpUndefindable => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            undefined === input.boolean ||
              "boolean" === typeof input.boolean ||
              $report(_exceptionable, {
                path: _path + ".boolean",
                expected: "(boolean | undefined)",
                value: input.boolean,
              }),
            undefined === input.bigint ||
              "bigint" === typeof input.bigint ||
              $report(_exceptionable, {
                path: _path + ".bigint",
                expected: "(bigint | undefined)",
                value: input.bigint,
              }),
            undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
              $report(_exceptionable, {
                path: _path + ".number",
                expected: "(number | undefined)",
                value: input.number,
              }),
            undefined === input.string ||
              "string" === typeof input.string ||
              $report(_exceptionable, {
                path: _path + ".string",
                expected: "(string | undefined)",
                value: input.string,
              }),
            undefined === input.constantBoolean ||
              true === input.constantBoolean ||
              $report(_exceptionable, {
                path: _path + ".constantBoolean",
                expected: "(true | undefined)",
                value: input.constantBoolean,
              }),
            undefined === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint ||
              $report(_exceptionable, {
                path: _path + ".constantBigint",
                expected: "(1 | 2 | 3 | undefined)",
                value: input.constantBigint,
              }),
            undefined === input.constantNumber ||
              3 === input.constantNumber ||
              2 === input.constantNumber ||
              1 === input.constantNumber ||
              $report(_exceptionable, {
                path: _path + ".constantNumber",
                expected: "(1 | 2 | 3 | undefined)",
                value: input.constantNumber,
              }),
            undefined === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString ||
              $report(_exceptionable, {
                path: _path + ".constantString",
                expected: '("one" | "three" | "two" | undefined)',
                value: input.constantString,
              }),
            0 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    [
                      "boolean",
                      "bigint",
                      "number",
                      "string",
                      "constantBoolean",
                      "constantBigint",
                      "constantNumber",
                      "constantString",
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
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectHttpUndefindable",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectHttpUndefindable",
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
