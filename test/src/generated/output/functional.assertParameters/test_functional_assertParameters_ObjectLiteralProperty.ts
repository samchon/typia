import typia from "typia";
import { _test_functional_assertParameters } from "../../../internal/_test_functional_assertParameters";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { TypeGuardError } from "typia";
export const test_functional_assertParameters_ObjectLiteralProperty =
  _test_functional_assertParameters(TypeGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      (input: ObjectLiteralProperty): ObjectLiteralProperty => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertParameters as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectLiteralProperty.ISomething => {
          const __is = (
            input: any,
          ): input is ObjectLiteralProperty.ISomething => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" ===
                typeof (input as any)["something-interesting-do-you-want?"] &&
              "string" ===
                typeof (input as any)["or-something-crazy-do-you-want?"]
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" ===
                  typeof input["something-interesting-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["something-interesting-do-you-want?"]',
                      expected: "string",
                      value: input["something-interesting-do-you-want?"],
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["or-something-crazy-do-you-want?"]',
                      expected: "string",
                      value: input["or-something-crazy-do-you-want?"],
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectLiteralProperty.ISomething",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectLiteralProperty.ISomething",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
