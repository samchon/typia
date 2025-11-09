import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagAtomicUnion = (): void => _test_functional_assertFunction(TypeGuardError)(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) => typia.functional.assertFunction(p),
)