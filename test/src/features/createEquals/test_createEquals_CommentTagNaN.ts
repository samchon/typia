import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createEquals_CommentTagNaN = _test_equals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.createEquals<CommentTagNaN>());
