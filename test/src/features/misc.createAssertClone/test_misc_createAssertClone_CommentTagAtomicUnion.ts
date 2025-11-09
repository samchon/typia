import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_createAssertClone_CommentTagAtomicUnion = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.misc.createAssertClone<CommentTagAtomicUnion>(),
  );
