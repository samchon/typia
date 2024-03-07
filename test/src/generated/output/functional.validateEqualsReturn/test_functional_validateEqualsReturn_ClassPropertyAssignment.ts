import typia from "typia";
import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_functional_validateEqualsReturn_ClassPropertyAssignment =
  _test_functional_validateEqualsReturn("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      (
        input: ClassPropertyAssignment,
      ): import("typia").IValidation<ClassPropertyAssignment> => {
        const result = ((
          input: any,
        ): typia.IValidation<ClassPropertyAssignment> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ClassPropertyAssignment => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "assignment" === input.note &&
              false === input.editable &&
              "boolean" === typeof input.incremental &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "name", "note", "editable", "incremental"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassPropertyAssignment => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
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
                  5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "id",
                            "name",
                            "note",
                            "editable",
                            "incremental",
                          ].some((prop: any) => key === prop)
                        )
                          return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
