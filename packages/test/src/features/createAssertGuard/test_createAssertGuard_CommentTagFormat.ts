import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuard_CommentTagFormat = _test_assertGuard(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  typia.createAssertGuard<CommentTagFormat>(),
);
