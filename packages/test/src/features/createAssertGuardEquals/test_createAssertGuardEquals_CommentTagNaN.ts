import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertGuardEquals_CommentTagNaN =
  _test_assertGuardEquals("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
    typia.createAssertGuardEquals<CommentTagNaN>(),
  );
