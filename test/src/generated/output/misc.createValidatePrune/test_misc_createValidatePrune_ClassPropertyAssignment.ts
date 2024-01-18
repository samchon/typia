import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_misc_createValidatePrune_ClassPropertyAssignment =
  _test_misc_validatePrune("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input: any): typia.IValidation<ClassPropertyAssignment> => {
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
        const $report = require("typia/lib/functional/$report").$report(errors);
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
    const prune = (input: ClassPropertyAssignment): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "id" === key ||
            "name" === key ||
            "note" === key ||
            "editable" === key ||
            "incremental" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  });
