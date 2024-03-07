import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";
export const test_functional_equalsParametersAsync_TypeTagRangeBigInt =
  _test_functional_equalsParametersAsync("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      async (input: TypeTagRangeBigInt): Promise<TypeTagRangeBigInt | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagRangeBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
              input.equal <= BigInt(10) &&
              (9 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "greater",
                      "greater_equal",
                      "less",
                      "less_equal",
                      "greater_less",
                      "greater_equal_less",
                      "greater_less_equal",
                      "greater_equal_less_equal",
                      "equal",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
