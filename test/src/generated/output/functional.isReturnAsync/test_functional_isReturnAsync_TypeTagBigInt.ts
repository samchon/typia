import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_functional_isReturnAsync_TypeTagBigInt =
  _test_functional_isReturnAsync("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      async (input: TypeTagBigInt): Promise<TypeTagBigInt | null> => {
        const result = await p(input);
        return ((input: any): input is TypeTagBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            BigInt(0) <= (input as any).ranged &&
            (input as any).ranged <= BigInt(100) &&
            "bigint" === typeof (input as any).minimum &&
            BigInt(0) <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            (input as any).maximum <= BigInt(100) &&
            "bigint" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % BigInt(3) === BigInt(0)
          );
        })(result)
          ? result
          : null;
      },
  );
