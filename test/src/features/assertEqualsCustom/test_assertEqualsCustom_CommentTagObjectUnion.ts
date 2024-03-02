import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertEqualsCustom_CommentTagObjectUnion = _test_assertEquals(
  CustomGuardError,
)("CommentTagObjectUnion")<CommentTagObjectUnion>(CommentTagObjectUnion)(
  (input) =>
    typia.assertEquals<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
