import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssertGuard_ToJsonDouble = _test_assertGuard(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input: any): asserts input is ToJsonDouble => {
  const __is = (input: any): input is ToJsonDouble => {
    return "object" === typeof input && null !== input && true;
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ToJsonDouble => {
      const $guard = (typia.createAssertGuard as any).guard;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean => true;
      return (
        ((("object" === typeof input &&
          null !== input &&
          false === Array.isArray(input)) ||
          $guard(true, {
            path: _path + "",
            expected: "ToJsonDouble.Parent",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "ToJsonDouble.Parent",
          value: input,
        })
      );
    })(input, "$input", true);
});
