import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_assertCloneCustom_CommentTagAtomicUnion =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.misc.assertClone<CommentTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
