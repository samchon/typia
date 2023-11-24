import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_misc_createIsPrune_CommentTagTypeBigInt = _test_misc_isPrune(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  (input: any): input is CommentTagTypeBigInt => {
    const is = (input: any): input is CommentTagTypeBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).in64 &&
        "bigint" === typeof (input as any).uint64 &&
        BigInt(0) <= (input as any).uint64
      );
    };
    const prune = (input: CommentTagTypeBigInt): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("in64" === key || "uint64" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
