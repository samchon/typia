import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isFunctionAsync_CommentTagArray =
  _test_functional_isFunctionAsync("CommentTagArray")(CommentTagArray)(
    (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.isFunction(p),
  );
