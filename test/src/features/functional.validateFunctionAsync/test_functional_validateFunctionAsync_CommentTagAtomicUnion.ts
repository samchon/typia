import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateFunctionAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.validateFunction(p),
    );
