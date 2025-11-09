import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_validateEqualsReturnAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.validateEqualsReturn(p),
    );
