import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_equalsReturn_CommentTagAtomicUnion =
  _test_functional_equalsReturn("CommentTagAtomicUnion")(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      typia.functional.equalsReturn(p),
  );
