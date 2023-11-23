import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssert_CommentTagPattern = _test_assert(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
  typia.createAssert<CommentTagPattern>(),
);
