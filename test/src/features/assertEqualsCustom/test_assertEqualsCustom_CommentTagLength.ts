import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertEqualsCustom_CommentTagLength = _test_assertEquals(
  CustomGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)((input) =>
  typia.assertEquals<CommentTagLength>(input, (p) => new CustomGuardError(p)),
);
