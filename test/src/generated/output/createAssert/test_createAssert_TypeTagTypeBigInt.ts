import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_createAssert_TypeTagTypeBigInt = _test_assert(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input: any): TypeTagTypeBigInt => {
  const __is = (input: any): input is TypeTagTypeBigInt => {
    return (
      "object" === typeof input &&
      null !== input &&
      "bigint" === typeof (input as any).in64 &&
      "bigint" === typeof (input as any).uint64 &&
      BigInt(0) <= (input as any).uint64
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is TypeTagTypeBigInt => {
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssert",
      );
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ("bigint" === typeof input.in64 ||
          $guard(_exceptionable, {
            path: _path + ".in64",
            expected: "bigint",
            value: input.in64,
          })) &&
        (("bigint" === typeof input.uint64 &&
          (BigInt(0) <= input.uint64 ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: 'bigint & Type<"uint64">',
              value: input.uint64,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".uint64",
            expected: '(bigint & Type<"uint64">)',
            value: input.uint64,
          }));
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagTypeBigInt",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "TypeTagTypeBigInt",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
