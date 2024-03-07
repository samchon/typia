import typia from "typia";
import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";
export const test_functional_equalsParameters_TypeTagBigInt =
  _test_functional_equalsParameters("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      (input: TypeTagBigInt): TypeTagBigInt | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.value &&
              "bigint" === typeof input.ranged &&
              BigInt(0) <= input.ranged &&
              input.ranged <= BigInt(100) &&
              "bigint" === typeof input.minimum &&
              BigInt(0) <= input.minimum &&
              "bigint" === typeof input.maximum &&
              input.maximum <= BigInt(100) &&
              "bigint" === typeof input.multipleOf &&
              input.multipleOf % BigInt(3) === BigInt(0) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "value",
                      "ranged",
                      "minimum",
                      "maximum",
                      "multipleOf",
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
