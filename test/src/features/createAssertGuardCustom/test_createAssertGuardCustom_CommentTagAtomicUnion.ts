import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssertGuardCustom_CommentTagAtomicUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.createAssertGuard<CommentTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
