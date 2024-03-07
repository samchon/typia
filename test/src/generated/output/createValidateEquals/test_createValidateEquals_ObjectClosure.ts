import typia from "typia";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectClosure } from "../../../structures/ObjectClosure";
export const test_createValidateEquals_ObjectClosure = _test_validateEquals(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(
  (input: any): typia.IValidation<ObjectClosure> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectClosure => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.id &&
        "function" === typeof input.open &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["id", "open"].some((prop: any) => key === prop)) return true;
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
      ): input is ObjectClosure => {
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
            "function" === typeof input.open ||
              $report(_exceptionable, {
                path: _path + ".open",
                expected: "unknown",
                value: input.open,
              }),
            2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["id", "open"].some((prop: any) => key === prop))
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
              expected: "ObjectClosure.IRecord",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectClosure.IRecord",
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
  },
);
