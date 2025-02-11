import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagAtomicUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagAtomicUnion",
  )(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
