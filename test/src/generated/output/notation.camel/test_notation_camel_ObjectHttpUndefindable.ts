import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
export const test_notation_validateCamel_ObjectHttpUndefindable =
  _test_notation_validateGeneral(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)<
    typia.CamelCase<ObjectHttpUndefindable>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.CamelCase<ObjectHttpUndefindable>> => {
        const validate = (
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
                "one" === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString);
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
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
                    "one" === input.constantString ||
                    "three" === input.constantString ||
                    "two" === input.constantString ||
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
        };
        const general = (
          input: ObjectHttpUndefindable,
        ): typia.CamelCase<ObjectHttpUndefindable> => {
          const $co0 = (input: any): any => ({
            boolean: input.boolean as any,
            bigint: input.bigint as any,
            number: input.number as any,
            string: input.string as any,
            constantBoolean: input.constantBoolean as any,
            constantBigint: input.constantBigint as any,
            constantNumber: input.constantNumber as any,
            constantString: input.constantString as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<ObjectHttpUndefindable> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpUndefindable> => {
        const $io0 = (input: any): boolean =>
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
            1 === input.constantNumber ||
            2 === input.constantNumber ||
            3 === input.constantNumber) &&
          (undefined === input.constantString ||
            "one" === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString);
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpUndefindable> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean",
                  expected: "(boolean | undefined)",
                  value: input.boolean,
                },
                errorFactory,
              )) &&
            (undefined === input.bigint ||
              "bigint" === typeof input.bigint ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigint",
                  expected: "(bigint | undefined)",
                  value: input.bigint,
                },
                errorFactory,
              )) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".number",
                  expected: "(number | undefined)",
                  value: input.number,
                },
                errorFactory,
              )) &&
            (undefined === input.string ||
              "string" === typeof input.string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".string",
                  expected: "(string | undefined)",
                  value: input.string,
                },
                errorFactory,
              )) &&
            (undefined === input.constantBoolean ||
              true === input.constantBoolean ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".constantBoolean",
                  expected: "(true | undefined)",
                  value: input.constantBoolean,
                },
                errorFactory,
              )) &&
            (undefined === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".constantBigint",
                  expected: "(1 | 2 | 3 | undefined)",
                  value: input.constantBigint,
                },
                errorFactory,
              )) &&
            (undefined === input.constantNumber ||
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".constantNumber",
                  expected: "(1 | 2 | 3 | undefined)",
                  value: input.constantNumber,
                },
                errorFactory,
              )) &&
            (undefined === input.constantString ||
              "one" === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".constantString",
                  expected: '("one" | "three" | "two" | undefined)',
                  value: input.constantString,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpUndefindable",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpUndefindable",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
