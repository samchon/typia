import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateReturnAsync_CommentTagDefault =
  _test_functional_validateReturnAsync("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.validateReturn(p),
  );
