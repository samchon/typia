import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertFunctionAsyncCustom_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "CommentTagAtomicUnion",
    )(CommentTagAtomicUnion)(
      (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
