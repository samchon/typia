import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isFunctionAsync_CommentTagDefault =
  _test_functional_isFunctionAsync("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.isFunction(p),
  );
