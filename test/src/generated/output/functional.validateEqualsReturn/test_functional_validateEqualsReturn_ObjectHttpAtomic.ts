import typia from "typia";
import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";
export const test_functional_validateEqualsReturn_ObjectHttpAtomic =
  _test_functional_validateEqualsReturn("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
      (
        input: ObjectHttpAtomic,
      ): import("typia").IValidation<ObjectHttpAtomic> => {
        const result = ((input: any): typia.IValidation<ObjectHttpAtomic> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpAtomic => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "boolean" === typeof input.boolean &&
              "bigint" === typeof input.bigint &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["boolean", "bigint", "number", "string"].some(
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
            ): input is ObjectHttpAtomic => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "boolean",
                      value: input.boolean,
                    }),
                  "bigint" === typeof input.bigint ||
                    $report(_exceptionable, {
                      path: _path + ".bigint",
                      expected: "bigint",
                      value: input.bigint,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "string",
                      value: input.string,
                    }),
                  4 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["boolean", "bigint", "number", "string"].some(
                            (prop: any) => key === prop,
                          )
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
                    expected: "ObjectHttpAtomic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpAtomic",
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
