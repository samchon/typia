import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_createValidateStringify_ClassGetter =
  _test_json_validateStringify("ClassGetter")<ClassGetter>(ClassGetter)(
    (input: ClassGetter): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ClassGetter> => {
        const errors = [] as any[];
        const __is = (input: any): input is ClassGetter => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.json.createValidateStringify as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ClassGetter => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.id ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                null === input.dead ||
                  "boolean" === typeof input.dead ||
                  $report(_exceptionable, {
                    path: _path + ".dead",
                    expected: "(boolean | null)",
                    value: input.dead,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassGetter.Person",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ClassGetter.Person",
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
      const stringify = (input: ClassGetter): string => {
        const $string = (typia.json.createValidateStringify as any).string;
        const $so0 = (input: any): any =>
          `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${
            null !== input.dead ? input.dead : "null"
          }}`;
        return $so0(input);
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );
