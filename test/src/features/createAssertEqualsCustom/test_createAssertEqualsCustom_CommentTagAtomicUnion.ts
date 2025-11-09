import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssertEqualsCustom_CommentTagAtomicUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.createAssertEquals<CommentTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
