import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssertGuardEquals_CommentTagPattern =
    _test_assertGuardEquals("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )(typia.createAssertGuardEquals<CommentTagPattern>());
