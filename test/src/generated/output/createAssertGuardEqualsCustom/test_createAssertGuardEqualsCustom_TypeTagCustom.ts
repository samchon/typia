import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_TypeTagCustom =
  _test_assertGuardEquals(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is TypeTagCustom => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is TypeTagCustom => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.id,
          ) &&
          "string" === typeof input.dollar &&
          input.dollar[0] === "$" &&
          !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
          "string" === typeof input.postfix &&
          input.postfix.endsWith("abcd") &&
          "number" === typeof input.powerOf &&
          Number.isFinite(input.powerOf) &&
          (() => {
            const denominator: number = Math.log(2);
            const value: number = Math.log(input.powerOf) / denominator;
            return Math.abs(value - Math.round(value)) < 1e-8;
          })() &&
          (4 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "dollar", "postfix", "powerOf"].some(
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
        ): input is TypeTagCustom => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
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
              )) &&
            (4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "dollar", "postfix", "powerOf"].some(
                    (prop: any) => key === prop,
                  )
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
    },
  );
