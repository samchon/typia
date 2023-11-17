import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertGuardEquals_CommentTagRangeBigInt =
    _test_assertGuardEquals("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )(typia.createAssertGuardEquals<CommentTagRangeBigInt>());
