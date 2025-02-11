import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertFunctionAsync_CommentTagAtomicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
    typia.functional.assertFunction(p),
  );
