import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_string = () => {
  const decoder = (input: string): string => {
    const $string = (typia.http.createParameter as any).string;
    const assert = (input: any): string => {
      const __is = (input: any): input is string => {
        return "string" === typeof input;
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is string => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            "string" === typeof input ||
            $guard(true, {
              path: _path + "",
              expected: "string",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $string(input);
    return assert(value);
  };
  const value: string = decoder("something");
  TestValidator.equals("parameter<string>(string)")(value)("something");
  TestValidator.error("parameter<string>(null)")(() => decoder("null"));
};
