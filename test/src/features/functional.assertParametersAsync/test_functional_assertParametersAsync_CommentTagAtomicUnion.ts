import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_assertParametersAsync_CommentTagAtomicUnion =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "CommentTagAtomicUnion",
  )(CommentTagAtomicUnion)(
    (p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.assertParameters(p),
  );
