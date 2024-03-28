import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_functional_isParameters_TypeTagTypeBigInt =
  _test_functional_isParameters("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
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
        return p(input);
      },
  );
