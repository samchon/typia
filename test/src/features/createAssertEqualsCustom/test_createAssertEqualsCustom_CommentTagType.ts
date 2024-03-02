import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertEqualsCustom_CommentTagType = _test_assertEquals(
  CustomGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)(
  typia.createAssertEquals<CommentTagType>((p) => new CustomGuardError(p)),
);
