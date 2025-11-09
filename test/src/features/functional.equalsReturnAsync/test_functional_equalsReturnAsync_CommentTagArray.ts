import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsReturnAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("CommentTagArray")(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.equalsReturn(p),
    );
