import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";
export const test_functional_isFunctionAsync_TypeTagRangeBigInt =
  _test_functional_isFunctionAsync("TypeTagRangeBigInt")(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      async (input: TypeTagRangeBigInt): Promise<TypeTagRangeBigInt | null> => {
        if (
          false ===
          ((input: any): input is TypeTagRangeBigInt => {
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
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is TypeTagRangeBigInt => {
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
        })(result)
          ? result
          : null;
      },
  );
