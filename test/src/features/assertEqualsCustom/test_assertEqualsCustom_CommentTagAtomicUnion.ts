import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertEqualsCustom_CommentTagAtomicUnion = _test_assertEquals(
  CustomGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  (input) =>
    typia.assertEquals<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
