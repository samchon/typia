import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_CommentTagRange = _test_assertEquals(
  CustomGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)(
  typia.createAssertEquals<CommentTagRange>((p) => new CustomGuardError(p)),
);
