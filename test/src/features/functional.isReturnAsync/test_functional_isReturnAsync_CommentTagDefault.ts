import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isReturnAsync_CommentTagDefault =
  _test_functional_isReturnAsync("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      typia.functional.isReturn(p),
  );
