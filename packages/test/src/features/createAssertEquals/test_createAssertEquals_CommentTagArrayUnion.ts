import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertEquals_CommentTagArrayUnion = _test_assertEquals(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
  typia.createAssertEquals<CommentTagArrayUnion>(),
);
