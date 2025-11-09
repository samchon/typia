import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsFunctionAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
