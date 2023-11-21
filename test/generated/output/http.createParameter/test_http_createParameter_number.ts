import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_number = () => {
  const decoder = (input: string): number => {
    const $number = (typia.http.createParameter as any).number;
    const assert = (input: any): number => {
      const __is = (input: any): input is number => {
        return "number" === typeof input && !Number.isNaN(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is number => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            ("number" === typeof input && !Number.isNaN(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "number",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $number(input);
    return assert(value);
  };
  const value: number = decoder("3.14");
  TestValidator.equals("parameter<number>(number)")(value)(3.14);
  TestValidator.error("parameter<number>(null)")(() => decoder("null"));
  TestValidator.error("parameter<number>(string)")(() => decoder("one"));
  TestValidator.error("parameter<number>(boolean)")(() => decoder("false"));
};
