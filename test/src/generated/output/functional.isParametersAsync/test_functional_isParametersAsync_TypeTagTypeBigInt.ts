import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
export const test_functional_isParametersAsync_TypeTagTypeBigInt =
  _test_functional_isParametersAsync("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      async (input: TypeTagTypeBigInt): Promise<TypeTagTypeBigInt | null> => {
        if (
          false ===
          ((input: any): input is TypeTagTypeBigInt => {
            return (
              "object" === typeof input &&
              null !== input &&
              "bigint" === typeof (input as any).in64 &&
              "bigint" === typeof (input as any).uint64 &&
              BigInt(0) <= (input as any).uint64
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
