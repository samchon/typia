import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssert_CommentTagNaN = (): void =>
  _test_assert(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
    typia.createAssert<CommentTagNaN>(),
  );
