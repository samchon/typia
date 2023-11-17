import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_string_nullable = () => {
  const decoder = (input: string): string | null => {
    const $string = (typia.http.createParameter as any).string;
    const assert = (input: any): string | null => {
      const __is = (input: any): input is string | null => {
        return null === input || "string" === typeof input;
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is string | null => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            null === input ||
            "string" === typeof input ||
            $guard(true, {
              path: _path + "",
              expected: "(null | string)",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $string(input);
    return assert(value);
  };
  const value: string | null = decoder("something");
  TestValidator.equals("parameter<string | null>(string)")(value)("something");
  TestValidator.equals("parameter<string | null>(null)")(decoder("null"));
};
