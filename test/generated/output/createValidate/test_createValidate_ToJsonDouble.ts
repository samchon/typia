import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createValidate_ToJsonDouble = _test_validate(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input: any): typia.IValidation<ToJsonDouble> => {
  const errors = [] as any[];
  const __is = (input: any): input is ToJsonDouble => {
    return "object" === typeof input && null !== input && true;
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ToJsonDouble => {
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
});
