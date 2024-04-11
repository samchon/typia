import typia from "typia";

import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_functional_validateReturn_ObjectHttpUndefindable =
  _test_functional_validateReturn("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )(
    (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      (
        input: ObjectHttpUndefindable,
      ): import("typia").IValidation<ObjectHttpUndefindable> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectHttpUndefindable> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpUndefindable => {
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (undefined === input.bigint ||
                "bigint" === typeof input.bigint) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.constantBoolean ||
                true === input.constantBoolean) &&
              (undefined === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint) &&
              (undefined === input.constantNumber ||
                1 === input.constantNumber ||
                2 === input.constantNumber ||
                3 === input.constantNumber) &&
              (undefined === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                "one" === input.constantString);
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpUndefindable => {
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
                    1 === input.constantNumber ||
                    2 === input.constantNumber ||
                    3 === input.constantNumber ||
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
