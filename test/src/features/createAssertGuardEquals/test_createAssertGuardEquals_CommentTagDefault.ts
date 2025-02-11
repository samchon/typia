import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertGuardEquals_CommentTagDefault =
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    typia.createAssertGuardEquals<CommentTagDefault>(),
  );
