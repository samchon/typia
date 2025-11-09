import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertGuardEquals_CommentTagObjectUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createAssertGuardEquals<CommentTagObjectUnion>(),
  );
