import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateEqualsReturnAsync_CommentTagPattern =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("CommentTagPattern")(
      CommentTagPattern,
    )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.validateEqualsReturn(p),
    );
