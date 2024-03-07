import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassClosure } from "../../../structures/ClassClosure";
import { TypeGuardError } from "typia";
export const test_assert_ClassClosure = _test_assert(TypeGuardError)(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ClassClosure => {
    const __is = (input: any): input is ClassClosure => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "something" === input.type &&
        "function" === typeof input.closure;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassClosure => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          ("something" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"something"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.closure ||
            $guard(
              _exceptionable,
              {
                path: _path + ".closure",
                expected: "unknown",
                value: input.closure,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ClassClosure.Something",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassClosure.Something",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
