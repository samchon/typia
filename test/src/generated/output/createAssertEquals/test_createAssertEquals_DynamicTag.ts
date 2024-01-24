import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_createAssertEquals_DynamicTag = _test_assertEquals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input: any): DynamicTag => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is DynamicTag => {
    const $join = (typia.createAssertEquals as any).join;
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
        return false;
      });
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input, true)
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicTag => {
      const $guard = (typia.createAssertEquals as any).guard;
      const $join = (typia.createAssertEquals as any).join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        false === _exceptionable ||
        Object.keys(input).every((key: any) => {
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
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: 'bigint & Type<"uint64">',
                    value: value,
                  }))) ||
              $guard(_exceptionable, {
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
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: 'string & Format<"email">',
                    value: value,
                  }))) ||
              $guard(_exceptionable, {
                path: _path + $join(key),
                expected: '(string & Format<"email">)',
                value: value,
              })
            );
          return $guard(_exceptionable, {
            path: _path + $join(key),
            expected: "undefined",
            value: value,
          });
        });
      return (
        ((("object" === typeof input &&
          null !== input &&
          false === Array.isArray(input)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicTag",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "DynamicTag",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
