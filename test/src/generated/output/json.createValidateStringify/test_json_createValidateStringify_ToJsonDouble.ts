import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_createValidateStringify_ToJsonDouble =
  _test_json_validateStringify("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
    (input: ToJsonDouble): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ToJsonDouble> => {
        const errors = [] as any[];
        const __is = (input: any): input is ToJsonDouble => {
          return "object" === typeof input && null !== input && true;
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ToJsonDouble => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean => true;
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ToJsonDouble.Parent",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ToJsonDouble.Parent",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const stringify = (input: ToJsonDouble): string => {
        const $number = require("typia/lib/functional/$number").$number;
        return `{"id":${$number((input.toJSON() as any).id)},"flag":${
          (input.toJSON() as any).flag
        }}`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );
