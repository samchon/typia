import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagFormat = _test_assertEquals(
  CustomGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.assertEquals<CommentTagFormat>(input, (p) => new CustomGuardError(p)),
);
