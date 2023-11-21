import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_number_nullable = () => {
  const value: number | null = ((input: string): number | null => {
    const $number = (typia.http.parameter as any).number;
    const assert = (input: any): number | null => {
      const __is = (input: any): input is number | null => {
        return (
          null === input || ("number" === typeof input && !Number.isNaN(input))
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is number | null => {
          const $guard = (typia.http.parameter as any).guard;
          return (
            null === input ||
            ("number" === typeof input && !Number.isNaN(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "(null | number)",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $number(input);
    return assert(value);
  })("3.14");
  TestValidator.equals("parameter<number | null>(number)")(value)(3.14);
  TestValidator.equals("parameter<number | null>(null)")(
    ((input: string): number | null => {
      const $number = (typia.http.parameter as any).number;
      const assert = (input: any): number | null => {
        const __is = (input: any): input is number | null => {
          return (
            null === input ||
            ("number" === typeof input && !Number.isNaN(input))
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is number | null => {
            const $guard = (typia.http.parameter as any).guard;
            return (
              null === input ||
              ("number" === typeof input && !Number.isNaN(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "(null | number)",
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
  TestValidator.error("parameter<number | null>(string)")(() =>
    ((input: string): number | null => {
      const $number = (typia.http.parameter as any).number;
      const assert = (input: any): number | null => {
        const __is = (input: any): input is number | null => {
          return (
            null === input ||
            ("number" === typeof input && !Number.isNaN(input))
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is number | null => {
            const $guard = (typia.http.parameter as any).guard;
            return (
              null === input ||
              ("number" === typeof input && !Number.isNaN(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "(null | number)",
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
  TestValidator.error("parameter<number | null>(boolean)")(() =>
    ((input: string): number | null => {
      const $number = (typia.http.parameter as any).number;
      const assert = (input: any): number | null => {
        const __is = (input: any): input is number | null => {
          return (
            null === input ||
            ("number" === typeof input && !Number.isNaN(input))
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is number | null => {
            const $guard = (typia.http.parameter as any).guard;
            return (
              null === input ||
              ("number" === typeof input && !Number.isNaN(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "(null | number)",
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
