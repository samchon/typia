import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_validateParse_ObjectGenericAlias =
  _test_json_validateParse("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) =>
    ((
      input: string,
    ): typia.IValidation<typia.Primitive<ObjectGenericAlias>> => {
      const validate = (input: any): typia.IValidation<ObjectGenericAlias> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectGenericAlias => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).value
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.validateParse as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectGenericAlias => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGenericAlias.Alias",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
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
      const output = JSON.parse(input);
      return validate(output) as any;
    })(input),
  );
