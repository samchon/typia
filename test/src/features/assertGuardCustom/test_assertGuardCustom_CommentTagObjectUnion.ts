import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertGuardCustom_CommentTagObjectUnion = _test_assertGuard(
  CustomGuardError,
)("CommentTagObjectUnion")<CommentTagObjectUnion>(CommentTagObjectUnion)(
  (input) =>
    typia.assertGuard<CommentTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
