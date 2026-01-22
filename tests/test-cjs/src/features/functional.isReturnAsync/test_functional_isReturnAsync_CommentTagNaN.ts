import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isReturnAsync_CommentTagNaN = (): Promise<void> =>
  _test_functional_isReturnAsync("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.isReturn(p),
  );
