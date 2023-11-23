import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_createValidateEquals_DynamicTag = _test_validateEquals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input: any): typia.IValidation<DynamicTag> => {
  const errors = [] as any[];
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is DynamicTag => {
    const $join = (typia.createValidateEquals as any).join;
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if (
          "number" === typeof Number(key) &&
          0 <= Number(key) &&
          Number(key) < 10
        )
          return "bigint" === typeof value && BigInt(0) <= value;
        if (
          "string" === typeof key &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            key,
          )
        )
          return (
            "string" === typeof value &&
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              value,
            )
          );
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
    const $report = (typia.createValidateEquals as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicTag => {
      const $join = (typia.createValidateEquals as any).join;
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
                if (
                  "number" === typeof Number(key) &&
                  0 <= Number(key) &&
                  Number(key) < 10
                )
                  return (
                    ("bigint" === typeof value &&
                      (BigInt(0) <= value ||
                        $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: 'bigint & Type<"uint64">',
                          value: value,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + $join(key),
                      expected: '(bigint & Type<"uint64">)',
                      value: value,
                    })
                  );
                if (
                  "string" === typeof key &&
                  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    key,
                  )
                )
                  return (
                    ("string" === typeof value &&
                      (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                        value,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: 'string & Format<"email">',
                          value: value,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + $join(key),
                      expected: '(string & Format<"email">)',
                      value: value,
                    })
                  );
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
            expected: "DynamicTag",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "DynamicTag",
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
