import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";
export const test_functional_isFunction_TypeTagTypeBigInt =
  _test_functional_isFunction("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      (input: TypeTagTypeBigInt): TypeTagTypeBigInt | null => {
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
        const result = p(input);
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
