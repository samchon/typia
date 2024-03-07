import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_functional_isParametersAsync_CommentTagTypeBigInt =
  _test_functional_isParametersAsync("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )(
    (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      async (
        input: CommentTagTypeBigInt,
      ): Promise<CommentTagTypeBigInt | null> => {
        if (
          false ===
          ((input: any): input is CommentTagTypeBigInt => {
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
