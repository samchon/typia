import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isReturnAsync_CommentTagRange =
  _test_functional_isReturnAsync("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.isReturn(p),
  );
