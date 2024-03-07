import typia from "typia";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicTag } from "../../../structures/DynamicTag";
export const test_equals_DynamicTag = _test_equals("DynamicTag")<DynamicTag>(
  DynamicTag,
)((input) =>
  ((input: any, _exceptionable: boolean = true): input is DynamicTag => {
    const $join = (typia.equals as any).join;
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
  })(input),
);
