import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateEqualsFunction_CommentTagAtomicUnion = (): void => _test_functional_validateEqualsFunction(
  "CommentTagAtomicUnion"
)(CommentTagAtomicUnion)(
  (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) => typia.functional.validateEqualsFunction(p),
)