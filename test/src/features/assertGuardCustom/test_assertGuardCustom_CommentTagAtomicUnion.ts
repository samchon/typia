import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertGuardCustom_CommentTagAtomicUnion = _test_assertGuard(
  CustomGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  (input) =>
    typia.assertGuard<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
