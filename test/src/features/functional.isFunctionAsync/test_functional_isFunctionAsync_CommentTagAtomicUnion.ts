import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_isFunctionAsync_CommentTagAtomicUnion =
  _test_functional_isFunctionAsync("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.isFunction(p),
  );
