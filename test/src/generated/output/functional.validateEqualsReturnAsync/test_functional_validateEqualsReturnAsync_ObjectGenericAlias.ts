import typia from "typia";
import { _test_functional_validateEqualsReturnAsync } from "../../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_validateEqualsReturnAsync_ObjectGenericAlias =
  _test_functional_validateEqualsReturnAsync("ObjectGenericAlias")(
    ObjectGenericAlias,
  )(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (
        input: ObjectGenericAlias,
      ): Promise<import("typia").IValidation<ObjectGenericAlias>> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectGenericAlias.Alias> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGenericAlias.Alias => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
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
            ): input is ObjectGenericAlias.Alias => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
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
                  1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
