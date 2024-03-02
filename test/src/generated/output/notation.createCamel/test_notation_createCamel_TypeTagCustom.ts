import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_notation_createValidateCamel_TypeTagCustom =
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.CamelCase<TypeTagCustom>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<TypeTagCustom>> => {
      const validate = (input: any): typia.IValidation<TypeTagCustom> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagCustom => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              (input as any).id,
            ) &&
            "string" === typeof (input as any).dollar &&
            (input as any).dollar[0] === "$" &&
            !isNaN(
              Number((input as any).dollar.substring(1).split(",").join("")),
            ) &&
            "string" === typeof (input as any).postfix &&
            (input as any).postfix.endsWith("abcd") &&
            "number" === typeof (input as any).powerOf &&
            Number.isFinite((input as any).powerOf) &&
            (() => {
              const denominator: number = Math.log(2);
              const value: number =
                Math.log((input as any).powerOf) / denominator;
              return Math.abs(value - Math.round(value)) < 1e-8;
            })()
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateCamel as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagCustom => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: '(string & Format<"uuid">)',
                    value: input.id,
                  }),
                ("string" === typeof input.dollar &&
                  ((input.dollar[0] === "$" &&
                    !isNaN(
                      Number(input.dollar.substring(1).split(",").join("")),
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".dollar",
                      expected: "string & Dollar",
                      value: input.dollar,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".dollar",
                    expected: "(string & Dollar)",
                    value: input.dollar,
                  }),
                ("string" === typeof input.postfix &&
                  (input.postfix.endsWith("abcd") ||
                    $report(_exceptionable, {
                      path: _path + ".postfix",
                      expected: 'string & Postfix<"abcd">',
                      value: input.postfix,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".postfix",
                    expected: '(string & Postfix<"abcd">)',
                    value: input.postfix,
                  }),
                ("number" === typeof input.powerOf &&
                  (Number.isFinite(input.powerOf) ||
                    $report(_exceptionable, {
                      path: _path + ".powerOf",
                      expected: "number",
                      value: input.powerOf,
                    })) &&
                  ((() => {
                    const denominator: number = Math.log(2);
                    const value: number = Math.log(input.powerOf) / denominator;
                    return Math.abs(value - Math.round(value)) < 1e-8;
                  })() ||
                    $report(_exceptionable, {
                      path: _path + ".powerOf",
                      expected: "number & PowerOf<2>",
                      value: input.powerOf,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".powerOf",
                    expected: "(number & PowerOf<2>)",
                    value: input.powerOf,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagCustom",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagCustom",
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
        input: TypeTagCustom,
      ): typia.CamelCase<TypeTagCustom> => {
        const $co0 = (input: any): any => ({
          id: input.id as any,
          dollar: input.dollar as any,
          postfix: input.postfix as any,
          powerOf: input.powerOf as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<TypeTagCustom> => {
      const __is = (input: any): input is typia.CamelCase<TypeTagCustom> => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            (input as any).id,
          ) &&
          "string" === typeof (input as any).dollar &&
          (input as any).dollar[0] === "$" &&
          !isNaN(
            Number((input as any).dollar.substring(1).split(",").join("")),
          ) &&
          "string" === typeof (input as any).postfix &&
          (input as any).postfix.endsWith("abcd") &&
          "number" === typeof (input as any).powerOf &&
          Number.isFinite((input as any).powerOf) &&
          (() => {
            const denominator: number = Math.log(2);
            const value: number =
              Math.log((input as any).powerOf) / denominator;
            return Math.abs(value - Math.round(value)) < 1e-8;
          })()
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<TypeTagCustom> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("string" === typeof input.id &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: 'string & Format<"uuid">',
                    value: input.id,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: '(string & Format<"uuid">)',
                  value: input.id,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.dollar &&
              ((input.dollar[0] === "$" &&
                !isNaN(
                  Number(input.dollar.substring(1).split(",").join("")),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".dollar",
                    expected: "string & Dollar",
                    value: input.dollar,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".dollar",
                  expected: "(string & Dollar)",
                  value: input.dollar,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.postfix &&
              (input.postfix.endsWith("abcd") ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".postfix",
                    expected: 'string & Postfix<"abcd">',
                    value: input.postfix,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".postfix",
                  expected: '(string & Postfix<"abcd">)',
                  value: input.postfix,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.powerOf &&
              (Number.isFinite(input.powerOf) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".powerOf",
                    expected: "number",
                    value: input.powerOf,
                  },
                  errorFactory,
                )) &&
              ((() => {
                const denominator: number = Math.log(2);
                const value: number = Math.log(input.powerOf) / denominator;
                return Math.abs(value - Math.round(value)) < 1e-8;
              })() ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".powerOf",
                    expected: "number & PowerOf<2>",
                    value: input.powerOf,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".powerOf",
                  expected: "(number & PowerOf<2>)",
                  value: input.powerOf,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagCustom",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TypeTagCustom",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
