import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertGuard_CommentTagLength = _test_assertGuard(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(
  typia.createAssertGuard<CommentTagLength>(),
);
