import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssert_CommentTagObjectUnion = (): void =>
  _test_assert(TypeGuardError)("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.createAssert<CommentTagObjectUnion>());
