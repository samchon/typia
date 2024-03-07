import typia from "typia";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_json_createValidateStringify_ClassPropertyAssignment =
  _test_json_validateStringify(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    (input: ClassPropertyAssignment): typia.IValidation<string> => {
      const validate = (
        input: any,
      ): typia.IValidation<ClassPropertyAssignment> => {
        const errors = [] as any[];
        const __is = (input: any): input is ClassPropertyAssignment => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "assignment" === input.note &&
            false === input.editable &&
            "boolean" === typeof input.incremental;
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
          ): input is ClassPropertyAssignment => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                "assignment" === input.note ||
                  $report(_exceptionable, {
                    path: _path + ".note",
                    expected: '"assignment"',
                    value: input.note,
                  }),
                false === input.editable ||
                  $report(_exceptionable, {
                    path: _path + ".editable",
                    expected: "false",
                    value: input.editable,
                  }),
                "boolean" === typeof input.incremental ||
                  $report(_exceptionable, {
                    path: _path + ".incremental",
                    expected: "boolean",
                    value: input.incremental,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassPropertyAssignment",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ClassPropertyAssignment",
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
      const stringify = (input: ClassPropertyAssignment): string => {
        const $number = (typia.json.createValidateStringify as any).number;
        const $string = (typia.json.createValidateStringify as any).string;
        const $throws = (typia.json.createValidateStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"note":${(() => {
            if ("string" === typeof input.note) return $string(input.note);
            if ("string" === typeof input.note) return '"' + input.note + '"';
            $throws({
              expected: '"assignment"',
              value: input.note,
            });
          })()},"editable":${input.editable},"incremental":${
            input.incremental
          }}`;
        return $so0(input);
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );
