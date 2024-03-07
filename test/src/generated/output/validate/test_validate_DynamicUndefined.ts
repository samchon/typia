import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
export const test_validate_DynamicUndefined = _test_validate(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)((input) =>
  ((input: any): typia.IValidation<DynamicUndefined> => {
    const errors = [] as any[];
    const __is = (input: any): input is DynamicUndefined => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return null !== value && undefined === value;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicUndefined => {
        const $join = (typia.validate as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    (null !== value ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      })) &&
                    (undefined === value ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      }))
                  );
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $report(true, {
              path: _path + "",
              expected: "DynamicUndefined",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "DynamicUndefined",
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
  })(input),
);
