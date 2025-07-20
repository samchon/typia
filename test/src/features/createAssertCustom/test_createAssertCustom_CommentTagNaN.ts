import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertCustom_CommentTagNaN = (): void =>
  _test_assert(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
    typia.createAssert<CommentTagNaN>((p) => new CustomGuardError(p)),
  );
