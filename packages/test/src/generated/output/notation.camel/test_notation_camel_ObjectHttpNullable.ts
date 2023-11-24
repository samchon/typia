import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_notation_validateCamel_ObjectHttpNullable =
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.CamelCase<ObjectHttpNullable>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<ObjectHttpNullable>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectHttpNullable> => {
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
                3 === input.constantNumber ||
                2 === input.constantNumber ||
                1 === input.constantNumber) &&
              (null === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                "one" === input.constantString) &&
              (null === input.nullableArray ||
                (Array.isArray(input.nullableArray) &&
                  input.nullableArray.every(
                    (elem: any) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  )));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
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
                    3 === input.constantNumber ||
                    2 === input.constantNumber ||
                    1 === input.constantNumber ||
                    $report(_exceptionable, {
                      path: _path + ".constantNumber",
                      expected: "(1 | 2 | 3 | null)",
                      value: input.constantNumber,
                    }),
                  null === input.constantString ||
                    "three" === input.constantString ||
                    "two" === input.constantString ||
                    "one" === input.constantString ||
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
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
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
        const general = (
          input: ObjectHttpNullable,
        ): typia.CamelCase<ObjectHttpNullable> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            boolean: input.boolean as any,
            bigint: input.bigint as any,
            number: input.number as any,
            string: input.string as any,
            constantBoolean: input.constantBoolean as any,
            constantBigint: input.constantBigint as any,
            constantNumber: input.constantNumber as any,
            constantString: input.constantString as any,
            nullableArray: Array.isArray(input.nullableArray)
              ? $cp0(input.nullableArray)
              : (input.nullableArray as any),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.CamelCase<ObjectHttpNullable> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpNullable> => {
        const $io0 = (input: any): boolean =>
          (null === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.bigint || "bigint" === typeof input.bigint) &&
          (null === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number) &&
              1 <= input.number)) &&
          (null === input.string || "string" === typeof input.string) &&
          (null === input.constantBoolean || true === input.constantBoolean) &&
          (null === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint) &&
          (null === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber) &&
          (null === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString) &&
          (null === input.nullableArray ||
            (Array.isArray(input.nullableArray) &&
              input.nullableArray.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              )));
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpNullable> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.boolean ||
              "boolean" === typeof input.boolean ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "(boolean | null)",
                value: input.boolean,
              })) &&
            (null === input.bigint ||
              "bigint" === typeof input.bigint ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "(bigint | null)",
                value: input.bigint,
              })) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                (Number.isFinite(input.number) ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  })) &&
                (1 <= input.number ||
                  $guard(_exceptionable, {
                    path: _path + ".number",
                    expected: "number & Minimum<1>",
                    value: input.number,
                  }))) ||
              $guard(_exceptionable, {
                path: _path + ".number",
                expected: "((number & Minimum<1>) | null)",
                value: input.number,
              })) &&
            (null === input.string ||
              "string" === typeof input.string ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "(null | string)",
                value: input.string,
              })) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean ||
              $guard(_exceptionable, {
                path: _path + ".constantBoolean",
                expected: "(null | true)",
                value: input.constantBoolean,
              })) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint ||
              $guard(_exceptionable, {
                path: _path + ".constantBigint",
                expected: "(1 | 2 | 3 | null)",
                value: input.constantBigint,
              })) &&
            (null === input.constantNumber ||
              3 === input.constantNumber ||
              2 === input.constantNumber ||
              1 === input.constantNumber ||
              $guard(_exceptionable, {
                path: _path + ".constantNumber",
                expected: "(1 | 2 | 3 | null)",
                value: input.constantNumber,
              })) &&
            (null === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString ||
              $guard(_exceptionable, {
                path: _path + ".constantString",
                expected: '("one" | "three" | "two" | null)',
                value: input.constantString,
              })) &&
            (null === input.nullableArray ||
              ((Array.isArray(input.nullableArray) ||
                $guard(_exceptionable, {
                  path: _path + ".nullableArray",
                  expected: "(Array<number> | null)",
                  value: input.nullableArray,
                })) &&
                input.nullableArray.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(_exceptionable, {
                      path: _path + ".nullableArray[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".nullableArray",
                expected: "(Array<number> | null)",
                value: input.nullableArray,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpNullable",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpNullable",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
