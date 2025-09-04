import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertGuardEqualsCustom_CommentTagAtomicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.assertGuardEquals<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
