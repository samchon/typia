import typia, { tags } from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_uint32 = () => {
  const decoder = (input: string): uint32 => {
    const $number = (typia.http.createParameter as any).number;
    const assert = (input: any): uint32 => {
      const __is = (input: any): input is uint32 => {
        return (
          "number" === typeof input &&
          Math.floor(input) === input &&
          0 <= input &&
          input <= 4294967295
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is uint32 => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            ("number" === typeof input &&
              ((Math.floor(input) === input &&
                0 <= input &&
                input <= 4294967295) ||
                $guard(true, {
                  path: _path + "",
                  expected: 'number & Type<"uint32">',
                  value: input,
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: '(number & Type<"uint32">)',
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $number(input);
    return assert(value);
  };
  const value: uint32 = decoder("1000");
  TestValidator.equals("parameter<uint32>(uint32)")(value)(1000);
  TestValidator.error("parameter<uint32>(int32)")(() => decoder("-1000"));
  TestValidator.error("parameter<uint32>(double)")(() => decoder("3.14"));
  TestValidator.error("parameter<uint32>(null)")(() => decoder("null"));
  TestValidator.error("parameter<uint32>(string)")(() => decoder("one"));
  TestValidator.error("parameter<uint32>(boolean)")(() => decoder("false"));
};
type uint32 = number & tags.Type<"uint32">;
