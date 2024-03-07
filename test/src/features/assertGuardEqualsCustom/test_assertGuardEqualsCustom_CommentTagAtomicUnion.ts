import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_CommentTagAtomicUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.assertGuardEquals<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
