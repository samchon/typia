import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuardEquals_CommentTagInfinite = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)(
    typia.createAssertGuardEquals<CommentTagInfinite>(),
  );
