import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertGuardEquals_CommentTagArrayUnion =
    _test_assertGuardEquals("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )(typia.createAssertGuardEquals<CommentTagArrayUnion>());
