import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";

export const test_misc_createIsPrune_TypeTagRangeBigInt = _test_misc_isPrune(
  "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
  (input: any): input is TypeTagRangeBigInt => {
    const is = (input: any): input is TypeTagRangeBigInt => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "bigint" === typeof input.greater &&
        BigInt(3) < input.greater &&
        "bigint" === typeof input.greater_equal &&
        BigInt(3) <= input.greater_equal &&
        "bigint" === typeof input.less &&
        input.less < BigInt(7) &&
        "bigint" === typeof input.less_equal &&
        input.less_equal <= BigInt(7) &&
        "bigint" === typeof input.greater_less &&
        BigInt(3) < input.greater_less &&
        input.greater_less < BigInt(7) &&
        "bigint" === typeof input.greater_equal_less &&
        BigInt(3) <= input.greater_equal_less &&
        input.greater_equal_less < BigInt(7) &&
        "bigint" === typeof input.greater_less_equal &&
        BigInt(3) < input.greater_less_equal &&
        input.greater_less_equal <= BigInt(7) &&
        "bigint" === typeof input.greater_equal_less_equal &&
        BigInt(3) <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= BigInt(7) &&
        "bigint" === typeof input.equal &&
        BigInt(10) <= input.equal &&
        input.equal <= BigInt(10);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TypeTagRangeBigInt): void => {
      const $io1 = (input: any): boolean =>
        "bigint" === typeof input.greater &&
        BigInt(3) < input.greater &&
        "bigint" === typeof input.greater_equal &&
        BigInt(3) <= input.greater_equal &&
        "bigint" === typeof input.less &&
        input.less < BigInt(7) &&
        "bigint" === typeof input.less_equal &&
        input.less_equal <= BigInt(7) &&
        "bigint" === typeof input.greater_less &&
        BigInt(3) < input.greater_less &&
        input.greater_less < BigInt(7) &&
        "bigint" === typeof input.greater_equal_less &&
        BigInt(3) <= input.greater_equal_less &&
        input.greater_equal_less < BigInt(7) &&
        "bigint" === typeof input.greater_less_equal &&
        BigInt(3) < input.greater_less_equal &&
        input.greater_less_equal <= BigInt(7) &&
        "bigint" === typeof input.greater_equal_less_equal &&
        BigInt(3) <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= BigInt(7) &&
        "bigint" === typeof input.equal &&
        BigInt(10) <= input.equal &&
        input.equal <= BigInt(10);
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po1(elem);
        });
      const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "greater" === key ||
            "greater_equal" === key ||
            "less" === key ||
            "less_equal" === key ||
            "greater_less" === key ||
            "greater_equal_less" === key ||
            "greater_less_equal" === key ||
            "greater_equal_less_equal" === key ||
            "equal" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
