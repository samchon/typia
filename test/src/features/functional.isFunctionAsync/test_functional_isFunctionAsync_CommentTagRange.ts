import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isFunctionAsync_CommentTagRange =
  _test_functional_isFunctionAsync("CommentTagRange")(CommentTagRange)(
    (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
      typia.functional.isFunction(p),
  );
