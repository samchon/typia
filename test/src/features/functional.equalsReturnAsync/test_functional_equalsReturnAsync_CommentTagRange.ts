import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsReturnAsync_CommentTagRange =
  _test_functional_equalsReturnAsync("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.equalsReturn(p),
  );
