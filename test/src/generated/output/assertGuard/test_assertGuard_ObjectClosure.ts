import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_assertGuard_ObjectClosure = _test_assertGuard(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
  ((input: any): asserts input is ObjectClosure => {
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
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            })) &&
          ("function" === typeof input.open ||
            $guard(_exceptionable, {
              path: _path + ".open",
              expected: "unknown",
              value: input.open,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectClosure.IRecord",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectClosure.IRecord",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
