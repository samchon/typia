import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
export const test_functional_isFunctionAsync_TypeTagTypeBigInt =
  _test_functional_isFunctionAsync("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
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
        const result = await p(input);
        return ((input: any): input is TypeTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        })(result)
          ? result
          : null;
      },
  );
