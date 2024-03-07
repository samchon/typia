import typia from "typia";
import { _test_functional_assertFunctionAsync } from "../../../internal/_test_functional_assertFunctionAsync";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertFunctionAsyncCustom_CommentTagTypeBigInt =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "CommentTagTypeBigInt",
  )(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      async (input: CommentTagTypeBigInt): Promise<CommentTagTypeBigInt> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): CommentTagTypeBigInt => {
          const __is = (input: any): input is CommentTagTypeBigInt => {
            return (
              "object" === typeof input &&
              null !== input &&
              "bigint" === typeof (input as any).in64 &&
              "bigint" === typeof (input as any).uint64 &&
              BigInt(0) <= (input as any).uint64
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagTypeBigInt => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("bigint" === typeof input.in64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".in64",
                      expected: "bigint",
                      value: input.in64,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.uint64 &&
                  (BigInt(0) <= input.uint64 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '(bigint & Type<"uint64">)',
                      value: input.uint64,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagTypeBigInt",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagTypeBigInt",
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
        ): CommentTagTypeBigInt => {
          const __is = (input: any): input is CommentTagTypeBigInt => {
            return (
              "object" === typeof input &&
              null !== input &&
              "bigint" === typeof (input as any).in64 &&
              "bigint" === typeof (input as any).uint64 &&
              BigInt(0) <= (input as any).uint64
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagTypeBigInt => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("bigint" === typeof input.in64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".in64",
                      expected: "bigint",
                      value: input.in64,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.uint64 &&
                  (BigInt(0) <= input.uint64 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '(bigint & Type<"uint64">)',
                      value: input.uint64,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagTypeBigInt",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagTypeBigInt",
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
