import typia from "typia";
import { _test_http_validateQuery } from "../../../internal/_test_http_validateQuery";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
export const test_http_createValidateQuery_ObjectHttpNullable =
  _test_http_validateQuery("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(
    (
      input: string | URLSearchParams,
    ): typia.IValidation<typia.Resolved<ObjectHttpNullable>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpNullable> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpNullable => {
          const $io0 = (input: any): boolean =>
            (null === input.boolean || "boolean" === typeof input.boolean) &&
            (null === input.bigint || "bigint" === typeof input.bigint) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number) &&
                1 <= input.number)) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (null === input.constantNumber ||
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber) &&
            (null === input.constantString ||
              "one" === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString) &&
            (null === input.nullableArray ||
              (Array.isArray(input.nullableArray) &&
                input.nullableArray.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.http.createValidateQuery as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpNullable => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                null === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | null)",
                    value: input.boolean,
                  }),
                null === input.bigint ||
                  "bigint" === typeof input.bigint ||
                  $report(_exceptionable, {
                    path: _path + ".bigint",
                    expected: "(bigint | null)",
                    value: input.bigint,
                  }),
                null === input.number ||
                  ("number" === typeof input.number &&
                    (Number.isFinite(input.number) ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                      })) &&
                    (1 <= input.number ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "number & Minimum<1>",
                        value: input.number,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "((number & Minimum<1>) | null)",
                    value: input.number,
                  }),
                null === input.string ||
                  "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "(null | string)",
                    value: input.string,
                  }),
                null === input.constantBoolean ||
                  true === input.constantBoolean ||
                  $report(_exceptionable, {
                    path: _path + ".constantBoolean",
                    expected: "(null | true)",
                    value: input.constantBoolean,
                  }),
                null === input.constantBigint ||
                  BigInt(1) === input.constantBigint ||
                  BigInt(2) === input.constantBigint ||
                  BigInt(3) === input.constantBigint ||
                  $report(_exceptionable, {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantBigint,
                  }),
                null === input.constantNumber ||
                  1 === input.constantNumber ||
                  2 === input.constantNumber ||
                  3 === input.constantNumber ||
                  $report(_exceptionable, {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantNumber,
                  }),
                null === input.constantString ||
                  "one" === input.constantString ||
                  "three" === input.constantString ||
                  "two" === input.constantString ||
                  $report(_exceptionable, {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | null)',
                    value: input.constantString,
                  }),
                null === input.nullableArray ||
                  ((Array.isArray(input.nullableArray) ||
                    $report(_exceptionable, {
                      path: _path + ".nullableArray",
                      expected: "(Array<number> | null)",
                      value: input.nullableArray,
                    })) &&
                    input.nullableArray
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".nullableArray[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".nullableArray",
                    expected: "(Array<number> | null)",
                    value: input.nullableArray,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpNullable",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpNullable",
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
      };
      const decode = (
        input: string | URLSearchParams,
      ): import("typia").Resolved<ObjectHttpNullable> => {
        const $params = (typia.http.createValidateQuery as any).params;
        const $boolean = (typia.http.createValidateQuery as any).boolean;
        const $bigint = (typia.http.createValidateQuery as any).bigint;
        const $number = (typia.http.createValidateQuery as any).number;
        const $string = (typia.http.createValidateQuery as any).string;
        const $array = (typia.http.createValidateQuery as any).array;
        input = $params(input) as URLSearchParams;
        const output = {
          boolean: $boolean(input.get("boolean")),
          bigint: $bigint(input.get("bigint")),
          number: $number(input.get("number")),
          string: $string(input.get("string")),
          constantBoolean: $boolean(input.get("constantBoolean")),
          constantBigint: $bigint(input.get("constantBigint")),
          constantNumber: $number(input.get("constantNumber")),
          constantString: $string(input.get("constantString")),
          nullableArray: $array(
            input.getAll("nullableArray").map((elem: any) => $number(elem)),
            null,
          ),
        };
        return output as any;
      };
      const output = decode(input);
      return validate(output) as any;
    },
  );
