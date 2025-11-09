import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_assertPruneCustom_CommentTagAtomicUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.misc.assertPrune<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
