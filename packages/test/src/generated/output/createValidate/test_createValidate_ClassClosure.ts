import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_createValidate_ClassClosure = _test_validate(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input: any): typia.IValidation<ClassClosure> => {
  const errors = [] as any[];
  const __is = (input: any): input is ClassClosure => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.id &&
      "something" === input.type &&
      "function" === typeof input.closure;
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ClassClosure => {
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "string" === typeof input.id ||
            $report(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            }),
          "something" === input.type ||
            $report(_exceptionable, {
              path: _path + ".type",
              expected: '"something"',
              value: input.type,
            }),
          "function" === typeof input.closure ||
            $report(_exceptionable, {
              path: _path + ".closure",
              expected: "unknown",
              value: input.closure,
            }),
        ].every((flag: boolean) => flag);
      return (
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ClassClosure.Something",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ClassClosure.Something",
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
