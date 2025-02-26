import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_standardSchema_createValidate_CommentTagArrayUnion = _test_standardSchema_validate(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)(typia.createValidate<CommentTagArrayUnion>());
