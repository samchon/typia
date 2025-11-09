import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsReturnAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
        typia.functional.assertEqualsReturn(p),
    );
