import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_createAssertPrune_CommentTagAtomicUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.misc.createAssertPrune<CommentTagAtomicUnion>(),
  );
