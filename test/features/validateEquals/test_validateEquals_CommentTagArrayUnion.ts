import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_validateEquals_CommentTagArrayUnion = _test_validateEquals(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((input) => typia.validateEquals<CommentTagArrayUnion>(input));
