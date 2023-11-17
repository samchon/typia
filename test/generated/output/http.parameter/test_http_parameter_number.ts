import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_number = () => {
  const value: number = ((input: string): number => {
    const $number = (typia.http.parameter as any).number;
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
          const $guard = (typia.http.parameter as any).guard;
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
  })("3.14");
  TestValidator.equals("parameter<number>(number)")(value)(3.14);
  TestValidator.error("parameter<number>(null)")(() =>
    ((input: string): number => {
      const $number = (typia.http.parameter as any).number;
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
            const $guard = (typia.http.parameter as any).guard;
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
    })("null"),
  );
  TestValidator.error("parameter<number>(string)")(() =>
    ((input: string): number => {
      const $number = (typia.http.parameter as any).number;
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
            const $guard = (typia.http.parameter as any).guard;
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
    })("one"),
  );
  TestValidator.error("parameter<number>(boolean)")(() =>
    ((input: string): number => {
      const $number = (typia.http.parameter as any).number;
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
            const $guard = (typia.http.parameter as any).guard;
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
    })("false"),
  );
};
