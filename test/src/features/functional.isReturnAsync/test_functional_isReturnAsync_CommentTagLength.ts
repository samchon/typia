import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isReturnAsync_CommentTagLength =
  _test_functional_isReturnAsync("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.isReturn(p),
  );
