import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isReturnAsync_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_isReturnAsync("CommentTagPattern")(CommentTagPattern)(
      (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
        typia.functional.isReturn(p),
    );
