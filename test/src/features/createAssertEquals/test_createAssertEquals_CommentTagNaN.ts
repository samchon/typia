import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertEquals_CommentTagNaN = _test_assertEquals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.createAssertEquals<CommentTagNaN>());
