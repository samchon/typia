import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
