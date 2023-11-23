import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createValidateEquals_ClassGetter = _test_validateEquals(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input: any): typia.IValidation<ClassGetter> => {
  const errors = [] as any[];
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ClassGetter => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      (null === input.dead || "boolean" === typeof input.dead) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["id", "name", "dead"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  };
  if (false === __is(input)) {
    const $report = (typia.createValidateEquals as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ClassGetter => {
      const $join = (typia.createValidateEquals as any).join;
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
          "string" === typeof input.name ||
            $report(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }),
          null === input.dead ||
            "boolean" === typeof input.dead ||
            $report(_exceptionable, {
              path: _path + ".dead",
              expected: "(boolean | null)",
              value: input.dead,
            }),
          3 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input)
              .map((key: any) => {
                if (["id", "name", "dead"].some((prop: any) => key === prop))
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
            expected: "ClassGetter.Person",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ClassGetter.Person",
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
