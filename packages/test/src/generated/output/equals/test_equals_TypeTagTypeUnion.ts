import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";

export const test_equals_TypeTagTypeUnion = _test_equals(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  ((input: any, _exceptionable: boolean = true): input is TypeTagTypeUnion => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.int32_or_uint32 &&
      ((Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
        -2147483648 <= input.int32_or_uint32 &&
        input.int32_or_uint32 <= 2147483647) ||
        (Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
          0 <= input.int32_or_uint32 &&
          input.int32_or_uint32 <= 4294967295)) &&
      "number" === typeof input.int32_or_int64 &&
      ((Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
        -2147483648 <= input.int32_or_int64 &&
        input.int32_or_int64 <= 2147483647) ||
        (Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
          -9223372036854776000 <= input.int32_or_int64 &&
          input.int32_or_int64 <= 9223372036854776000)) &&
      "number" === typeof input.int32_or_uint64 &&
      ((Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
        -2147483648 <= input.int32_or_uint64 &&
        input.int32_or_uint64 <= 2147483647) ||
        (Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
          0 <= input.int32_or_uint64 &&
          input.int32_or_uint64 <= 18446744073709552000)) &&
      "number" === typeof input.int32_or_float &&
      ((Math.floor(input.int32_or_float) === input.int32_or_float &&
        -2147483648 <= input.int32_or_float &&
        input.int32_or_float <= 2147483647) ||
        (-1.175494351e38 <= input.int32_or_float &&
          input.int32_or_float <= 3.4028235e38)) &&
      "number" === typeof input.int32_or_double &&
      ((Math.floor(input.int32_or_double) === input.int32_or_double &&
        -2147483648 <= input.int32_or_double &&
        input.int32_or_double <= 2147483647) ||
        (Number.isFinite(input.int32_or_double) && true)) &&
      "number" === typeof input.int64_or_uint64 &&
      ((Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
        -9223372036854776000 <= input.int64_or_uint64 &&
        input.int64_or_uint64 <= 9223372036854776000) ||
        (Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
          0 <= input.int64_or_uint64 &&
          input.int64_or_uint64 <= 18446744073709552000)) &&
      "number" === typeof input.int64_or_float &&
      ((-1.175494351e38 <= input.int64_or_float &&
        input.int64_or_float <= 3.4028235e38) ||
        (Math.floor(input.int64_or_float) === input.int64_or_float &&
          -9223372036854776000 <= input.int64_or_float &&
          input.int64_or_float <= 9223372036854776000)) &&
      "number" === typeof input.int64_or_double &&
      ((Number.isFinite(input.int64_or_double) && true) ||
        (Math.floor(input.int64_or_double) === input.int64_or_double &&
          -9223372036854776000 <= input.int64_or_double &&
          input.int64_or_double <= 9223372036854776000)) &&
      "number" === typeof input.float_or_double &&
      ((-1.175494351e38 <= input.float_or_double &&
        input.float_or_double <= 3.4028235e38) ||
        (Number.isFinite(input.float_or_double) && true)) &&
      "number" === typeof input.everything &&
      ((Math.floor(input.everything) === input.everything &&
        -2147483648 <= input.everything &&
        input.everything <= 2147483647) ||
        (Math.floor(input.everything) === input.everything &&
          0 <= input.everything &&
          input.everything <= 4294967295) ||
        (-1.175494351e38 <= input.everything &&
          input.everything <= 3.4028235e38) ||
        (Number.isFinite(input.everything) && true) ||
        (Math.floor(input.everything) === input.everything &&
          -9223372036854776000 <= input.everything &&
          input.everything <= 9223372036854776000) ||
        (Math.floor(input.everything) === input.everything &&
          0 <= input.everything &&
          input.everything <= 18446744073709552000)) &&
      (10 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "int32_or_uint32",
              "int32_or_int64",
              "int32_or_uint64",
              "int32_or_float",
              "int32_or_double",
              "int64_or_uint64",
              "int64_or_float",
              "int64_or_double",
              "float_or_double",
              "everything",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  })(input),
);
