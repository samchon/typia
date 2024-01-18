import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_createValidateStringify_ObjectGenericAlias =
  _test_json_validateStringify("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input: ObjectGenericAlias): typia.IValidation<string> => {
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
        const $report = require("typia/lib/functional/$report").$report(errors);
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
    const stringify = (input: ObjectGenericAlias): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      return `{"value":${$string((input as any).value)}}`;
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
