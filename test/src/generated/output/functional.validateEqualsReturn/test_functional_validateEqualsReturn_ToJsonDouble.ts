import typia from "typia";
import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_functional_validateEqualsReturn_ToJsonDouble =
  _test_functional_validateEqualsReturn("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      (input: ToJsonDouble): import("typia").IValidation<ToJsonDouble> => {
        const result = ((
          input: any,
        ): typia.IValidation<ToJsonDouble.Parent> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonDouble.Parent => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              0 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
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
            ): input is ToJsonDouble.Parent => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  0 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
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
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ToJsonDouble.Parent",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ToJsonDouble.Parent",
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
