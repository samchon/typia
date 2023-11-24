import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_validateEquals_ObjectInternal = _test_validateEquals(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
  ((input: any): typia.IValidation<ObjectInternal> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectInternal => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["id", "name"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectInternal => {
        const $join = (typia.validateEquals as any).join;
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
            2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["id", "name"].some((prop: any) => key === prop))
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
              expected: "ObjectInternal",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectInternal",
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
