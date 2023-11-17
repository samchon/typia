import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssertGuardEquals_CommentTagTypeBigInt =
    _test_assertGuardEquals("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )(typia.createAssertGuardEquals<CommentTagTypeBigInt>());
