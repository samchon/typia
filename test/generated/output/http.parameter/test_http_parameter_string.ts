import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_string = () => {
  const value: string = ((input: string): string => {
    const $string = (typia.http.parameter as any).string;
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
          const $guard = (typia.http.parameter as any).guard;
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
  })("something");
  TestValidator.equals("parameter<string>(string)")(value)("something");
  TestValidator.error("parameter<string>(null)")(() =>
    ((input: string): string => {
      const $string = (typia.http.parameter as any).string;
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
            const $guard = (typia.http.parameter as any).guard;
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
    })("null"),
  );
};
