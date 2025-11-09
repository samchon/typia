import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_CommentTagAtomicUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.assertEqualsParameters(p),
)