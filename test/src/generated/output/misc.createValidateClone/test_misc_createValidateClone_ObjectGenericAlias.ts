import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_createValidateClone_ObjectGenericAlias =
  _test_misc_validateClone("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input: any): typia.IValidation<typia.Resolved<ObjectGenericAlias>> => {
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
        const $report = (typia.misc.createValidateClone as any).report(errors);
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
    const clone = (
      input: ObjectGenericAlias,
    ): import("typia").Resolved<ObjectGenericAlias> => {
      const $co0 = (input: any): any => ({
        value: input.value as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
  });
