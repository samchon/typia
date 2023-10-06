import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createPrune_CommentTagBigInt = _test_misc_prune(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)(
    typia.misc.createPrune<CommentTagBigInt>(),
);
