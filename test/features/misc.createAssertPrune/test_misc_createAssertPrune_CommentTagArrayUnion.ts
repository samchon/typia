import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createAssertPrune_CommentTagArrayUnion =
    _test_misc_assertPrune("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )(typia.misc.createAssertPrune<CommentTagArrayUnion>());
