import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateReturn_CommentTagAtomicUnion =
  _test_functional_validateReturn("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
    typia.functional.validateReturn(p),
  );
