import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createClone_CommentTagArrayUnion = _test_misc_clone(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.misc.createClone<CommentTagArrayUnion>());
