import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { TypeGuardError } from "typia";
export const test_assert_ObjectClosure = _test_assert(TypeGuardError)(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectClosure => {
    const __is = (input: any): input is ObjectClosure => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id && "function" === typeof input.open;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectClosure => {
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
          ("function" === typeof input.open ||
            $guard(
              _exceptionable,
              {
                path: _path + ".open",
                expected: "unknown",
                value: input.open,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectClosure.IRecord",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectClosure.IRecord",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
