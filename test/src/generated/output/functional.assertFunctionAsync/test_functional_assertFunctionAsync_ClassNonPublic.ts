import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../../internal/_test_functional_assertFunctionAsync";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_functional_assertFunctionAsync_ClassNonPublic =
  _test_functional_assertFunctionAsync(TypeGuardError)("ClassNonPublic")(
    ClassNonPublic,
  )(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      async (input: ClassNonPublic): Promise<ClassNonPublic> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
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
        ): ClassNonPublic.Accessor => {
          const __is = (input: any): input is ClassNonPublic.Accessor => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).implicit &&
              "string" === typeof (input as any).shown
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassNonPublic.Accessor => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.implicit ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".implicit",
                      expected: "string",
                      value: input.implicit,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.shown ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".shown",
                      expected: "string",
                      value: input.shown,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ClassNonPublic.Accessor",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassNonPublic.Accessor",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ClassNonPublic.Accessor => {
          const __is = (input: any): input is ClassNonPublic.Accessor => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).implicit &&
              "string" === typeof (input as any).shown
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassNonPublic.Accessor => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.implicit ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".implicit",
                      expected: "string",
                      value: input.implicit,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.shown ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".shown",
                      expected: "string",
                      value: input.shown,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ClassNonPublic.Accessor",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassNonPublic.Accessor",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
