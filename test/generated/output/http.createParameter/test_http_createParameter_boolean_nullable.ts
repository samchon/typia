import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_boolean_nullable = () => {
  const decoder = (input: string): boolean | null => {
    const $boolean = (typia.http.createParameter as any).boolean;
    const assert = (input: any): boolean | null => {
      const __is = (input: any): input is boolean | null => {
        return null === input || "boolean" === typeof input;
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is boolean | null => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            null === input ||
            "boolean" === typeof input ||
            $guard(true, {
              path: _path + "",
              expected: "(boolean | null)",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $boolean(input);
    return assert(value);
  };
  TestValidator.equals("parameter<boolean | null>(boolean)")(decoder("false"))(
    false,
  );
  TestValidator.equals("parameter<boolean | null>(boolean)")(decoder("1"))(
    true,
  );
  TestValidator.equals("parameter<boolean | null>(null)")(decoder("null"));
  TestValidator.error("parameter<boolean | null>(string)")(() =>
    decoder("one"),
  );
  TestValidator.error("parameter<boolean | null>(number)")(() =>
    decoder("3.14"),
  );
};
