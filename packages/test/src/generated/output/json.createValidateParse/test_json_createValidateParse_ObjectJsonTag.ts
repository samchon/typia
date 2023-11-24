import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_createValidateParse_ObjectJsonTag =
  _test_json_validateParse("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    (input: string): typia.IValidation<typia.Primitive<ObjectJsonTag>> => {
      const validate = (input: any): typia.IValidation<ObjectJsonTag> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectJsonTag => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).vulnerable &&
            "string" === typeof (input as any).description &&
            "string" === typeof (input as any).title &&
            "string" === typeof (input as any).complicate_title
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.createValidateParse as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectJsonTag => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.vulnerable ||
                  $report(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "string",
                    value: input.vulnerable,
                  }),
                "string" === typeof input.description ||
                  $report(_exceptionable, {
                    path: _path + ".description",
                    expected: "string",
                    value: input.description,
                  }),
                "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  }),
                "string" === typeof input.complicate_title ||
                  $report(_exceptionable, {
                    path: _path + ".complicate_title",
                    expected: "string",
                    value: input.complicate_title,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectJsonTag",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectJsonTag",
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
    },
  );
