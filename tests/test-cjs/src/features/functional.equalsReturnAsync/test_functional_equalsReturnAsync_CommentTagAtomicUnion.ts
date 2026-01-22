import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_functional_equalsReturnAsync_CommentTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("CommentTagAtomicUnion")(
      CommentTagAtomicUnion,
    )((p: (input: CommentTagAtomicUnion) => Promise<CommentTagAtomicUnion>) =>
      typia.functional.equalsReturn(p),
    );
