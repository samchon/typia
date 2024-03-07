import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
export const test_functional_equalsParametersAsync_TypeTagTypeBigInt =
  _test_functional_equalsParametersAsync("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      async (input: TypeTagTypeBigInt): Promise<TypeTagTypeBigInt | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagTypeBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.in64 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["in64", "uint64"].some((prop: any) => key === prop))
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
