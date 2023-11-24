import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_misc_createValidatePrune_ObjectHttpNullable =
  _test_misc_validatePrune("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input: any): typia.IValidation<ObjectHttpNullable> => {
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
      if (false === __is(input)) {
        const $report = (typia.misc.createValidatePrune as any).report(errors);
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
    const prune = (input: ObjectHttpNullable): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "boolean" === key ||
            "bigint" === key ||
            "number" === key ||
            "string" === key ||
            "constantBoolean" === key ||
            "constantBigint" === key ||
            "constantNumber" === key ||
            "constantString" === key ||
            "nullableArray" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  });
