import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_isFunction_CommentTagAtomicUnion = (): void =>
  _test_functional_isFunction("CommentTagAtomicUnion")(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.isFunction(p),
  );
