import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_CommentTagAtomicUnion = (): void => _test_functional_assertReturn(TypeGuardError)(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) => typia.functional.assertReturn(p),
)