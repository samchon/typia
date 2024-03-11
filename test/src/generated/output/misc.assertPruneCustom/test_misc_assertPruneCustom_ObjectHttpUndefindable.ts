import typia from "typia";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_assertPruneCustom_ObjectHttpUndefindable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectHttpUndefindable => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpUndefindable => {
        const __is = (input: any): input is ObjectHttpUndefindable => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
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
          ): input is ObjectHttpUndefindable => {
            const $guard = (typia.misc.assertPrune as any).guard;
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
      };
      const prune = (input: ObjectHttpUndefindable): void => {
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
              "constantString" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );
