import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_assertPrune_CommentTagRangeBigInt =
    _test_misc_assertPrune("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )(typia.misc.createAssertPrune<CommentTagRangeBigInt>());
