import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_equalsFunction_CommentTagAtomicUnion =
  _test_functional_equalsFunction("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
    typia.functional.equalsFunction(p),
  );
