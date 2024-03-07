import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsReturnAsync_CommentTagRange =
  _test_functional_validateEqualsReturnAsync("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateEqualsReturn(p),
  );
