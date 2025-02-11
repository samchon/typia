import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertGuardEquals_CommentTagInfinite =
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)((input) =>
    typia.assertGuardEquals<CommentTagInfinite>(input),
  );
