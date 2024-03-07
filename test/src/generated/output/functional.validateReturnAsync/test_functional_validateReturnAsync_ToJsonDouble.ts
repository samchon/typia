import typia from "typia";
import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_functional_validateReturnAsync_ToJsonDouble =
  _test_functional_validateReturnAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (
        input: ToJsonDouble,
      ): Promise<import("typia").IValidation<ToJsonDouble>> => {
        const result = ((
          input: any,
        ): typia.IValidation<ToJsonDouble.Parent> => {
          const errors = [] as any[];
          const __is = (input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonDouble.Parent => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean => true;
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
