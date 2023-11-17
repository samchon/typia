import { v4 } from "uuid";

import typia, { tags } from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_uuid = () => {
  const decoder = (input: string): uuid => {
    const $string = (typia.http.createParameter as any).string;
    const assert = (input: any): uuid => {
      const __is = (input: any): input is uuid => {
        return (
          "string" === typeof input &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            input,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is uuid => {
          const $guard = (typia.http.createParameter as any).guard;
          return (
            ("string" === typeof input &&
              (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input,
              ) ||
                $guard(true, {
                  path: _path + "",
                  expected: 'string & Format<"uuid">',
                  value: input,
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: '(string & Format<"uuid">)',
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const value = $string(input);
    return assert(value);
  };
  const id: string = v4();
  const value: uuid = decoder(id);
  TestValidator.equals("parameter<uuid>(uuid)")(id)(value);
  TestValidator.error("parameter<uuid>(string)")(() => decoder("something"));
  TestValidator.error("parameter<uuid>(null)")(() => decoder("null"));
};
type uuid = string & tags.Format<"uuid">;
