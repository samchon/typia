import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_functional_validateReturnAsync_DynamicTag =
  _test_functional_validateReturnAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      async (
        input: DynamicTag,
      ): Promise<import("typia").IValidation<DynamicTag>> => {
        const result = ((input: any): typia.IValidation<DynamicTag> => {
          const errors = [] as any[];
          const __is = (input: any): input is DynamicTag => {
            const $io0 = (input: any): boolean =>
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
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    key,
                  )
                )
                  return (
                    "string" === typeof value &&
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                      value,
                    )
                  );
                return true;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicTag => {
              const $join = (typia.functional.validateReturn as any).join;
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
                          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                            key,
                          )
                        )
                          return (
                            ("string" === typeof value &&
                              (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
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
                        return true;
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
