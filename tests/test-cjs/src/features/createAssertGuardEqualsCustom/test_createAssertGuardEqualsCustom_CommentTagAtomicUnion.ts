import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssertGuardEqualsCustom_CommentTagAtomicUnion =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
      typia.createAssertGuardEquals<CommentTagAtomicUnion>(
        (p) => new CustomGuardError(p),
      ),
    );
