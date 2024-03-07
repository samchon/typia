import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_CommentTagAtomicUnion =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "CommentTagAtomicUnion",
  )(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
