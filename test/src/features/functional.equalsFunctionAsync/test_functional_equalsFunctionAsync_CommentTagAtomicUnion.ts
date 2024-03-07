import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_equalsFunctionAsync_CommentTagAtomicUnion =
  _test_functional_equalsFunctionAsync("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.equalsFunction(p),
  );
