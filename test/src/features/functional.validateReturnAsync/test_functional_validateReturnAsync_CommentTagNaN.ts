import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateReturnAsync_CommentTagNaN =
  _test_functional_validateReturnAsync("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.validateReturn(p),
  );
