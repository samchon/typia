import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_notation_validateSnake_ClassPropertyAssignment =
  _test_notation_validateGeneral(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)<
    typia.SnakeCase<ClassPropertyAssignment>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.SnakeCase<ClassPropertyAssignment>> => {
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
            const $report = (typia.notations.validateSnake as any).report(
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
        const general = (
          input: ClassPropertyAssignment,
        ): typia.SnakeCase<ClassPropertyAssignment> => {
          const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            note: input.note as any,
            editable: input.editable as any,
            incremental: input.incremental as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ClassPropertyAssignment> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ClassPropertyAssignment> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "assignment" === input.note &&
          false === input.editable &&
          "boolean" === typeof input.incremental;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ClassPropertyAssignment> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("assignment" === input.note ||
              $guard(_exceptionable, {
                path: _path + ".note",
                expected: '"assignment"',
                value: input.note,
              })) &&
            (false === input.editable ||
              $guard(_exceptionable, {
                path: _path + ".editable",
                expected: "false",
                value: input.editable,
              })) &&
            ("boolean" === typeof input.incremental ||
              $guard(_exceptionable, {
                path: _path + ".incremental",
                expected: "boolean",
                value: input.incremental,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ClassPropertyAssignment",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ClassPropertyAssignment",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
