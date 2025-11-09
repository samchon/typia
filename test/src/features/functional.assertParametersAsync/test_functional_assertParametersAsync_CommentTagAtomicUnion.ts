import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagAtomicUnion = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.assertParameters(p),
)