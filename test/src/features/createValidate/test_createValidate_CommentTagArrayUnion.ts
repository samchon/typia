import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createValidate_CommentTagArrayUnion = _test_validate(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.createValidate<CommentTagArrayUnion>());
