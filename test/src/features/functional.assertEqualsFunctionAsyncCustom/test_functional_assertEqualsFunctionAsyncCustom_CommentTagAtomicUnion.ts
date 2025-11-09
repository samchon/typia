import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagAtomicUnion = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)