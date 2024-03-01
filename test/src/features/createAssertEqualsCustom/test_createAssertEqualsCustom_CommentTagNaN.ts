import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertEqualsCustom_CommentTagNaN = _test_assertEquals(
  CustomGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
  typia.createAssertEquals<CommentTagNaN>((p) => new CustomGuardError(p)),
);
