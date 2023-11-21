import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_misc_createPrune_CommentTagTypeBigInt = _test_misc_prune(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  (input: CommentTagTypeBigInt): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("in64" === key || "uint64" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  },
);
