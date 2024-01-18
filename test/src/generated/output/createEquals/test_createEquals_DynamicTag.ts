import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_createEquals_DynamicTag = _test_equals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(
  (input: any, _exceptionable: boolean = true): input is DynamicTag => {
    const $join = require("typia/lib/functional/$join").$join;
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
  },
);
